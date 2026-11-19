"""Minimal OuDiaSecond (.oud2) block parser."""
import re

def parse_oud2(text):
    text = text.lstrip("\ufeff")
    lines = text.splitlines()
    root = {}
    stack = [root]
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if line == ".":
            if len(stack) > 1:
                stack.pop()
            continue
        if line.endswith(".") and "=" not in line:
            name = line[:-1]
            node = {}
            parent = stack[-1]
            if name in parent:
                if not isinstance(parent[name], list) or (parent[name] and not isinstance(parent[name][0], dict)):
                    parent[name] = [parent[name]]
                parent[name].append(node)
            else:
                parent[name] = node
            stack.append(node)
            continue
        if "=" in line:
            k, v = line.split("=", 1)
            parent = stack[-1]
            if k in parent:
                if isinstance(parent[k], list):
                    parent[k].append(v)
                else:
                    parent[k] = [parent[k], v]
            else:
                parent[k] = v
            continue
    return root

def as_list(x):
    if x is None: return []
    return x if isinstance(x, list) else [x]

def parse_jikoku_time(s):
    """OuDiaSecond time string -> (h, m, s). Format: HMM[SS] (seconds appended when nonzero)."""
    s = s.strip()
    if not s.isdigit():
        return None
    if len(s) <= 4:
        s = s.zfill(4)
        return (int(s[:-2]), int(s[-2:]), 0)
    return (int(s[:-4]), int(s[-4:-2]), int(s[-2:]))

def fmt_hhmm(t):
    if t is None: return None
    h, m, s = t
    return f"{h:02d}:{m:02d}"

def parse_ekijikoku(jikoku_str, n_stations):
    """Return list per station index (in Rosen Eki order):
       (stop_type, arr_tuple_or_None, dep_tuple_or_None)
       stop_type: 1 stop, 2 pass, 3 not routed."""
    entries = []
    raw = jikoku_str.split(",") if jikoku_str else []
    for i in range(n_stations):
        item = raw[i].strip() if i < len(raw) else ""
        if not item:
            entries.append((3, None, None))
            continue
        # strip track suffix $n (and possible second $)
        item = item.split("$")[0]
        if ";" not in item:
            # 時刻なしの種別のみの表記（例: 通過 "2$0" → "2"）も種別を保持する。
            # 旧コードはここを一律 (3, None, None) = 経由なしと誤読していた
            # （2026-11-17 の上りミラーツールで発覚したのと同じ癖。あちらは
            # 専用パーサで回避済みだが、この共有パーサは未修正だった）。
            try:
                stype = int(item)
            except ValueError:
                stype = 3
            entries.append((stype, None, None))
            continue
        stype_s, _, rest = item.partition(";")
        try:
            stype = int(stype_s)
        except ValueError:
            entries.append((3, None, None))
            continue
        arr = dep = None
        if "/" in rest:
            a, _, d = rest.partition("/")
            arr = parse_jikoku_time(a) if a else None
            dep = parse_jikoku_time(d) if d else None
        elif rest:
            dep = parse_jikoku_time(rest)
        entries.append((stype, arr, dep))
    return entries
