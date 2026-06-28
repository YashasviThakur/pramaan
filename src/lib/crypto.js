// Lightweight, synchronous hashing + Merkle helpers for display purposes.
// (Demo-grade — real deployment would use Web Crypto SHA-256 + a proper Merkle tree.)

export function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, '0');
}

// Short hash like "a91f…7c0e"
export function shortHash(str) {
  const a = fnv1a(str);
  const b = fnv1a(str + '::salt');
  return `${a.slice(0, 4)}…${b.slice(4, 8)}`;
}

// Build a Merkle root from a list of leaf strings
export function merkleRoot(leaves) {
  if (!leaves.length) return '0'.repeat(8);
  let level = leaves.map(fnv1a);
  while (level.length > 1) {
    const next = [];
    for (let i = 0; i < level.length; i += 2) {
      const l = level[i];
      const r = level[i + 1] ?? level[i];
      next.push(fnv1a(l + r));
    }
    level = next;
  }
  return level[0];
}

export function combineKeyShares(frags) {
  // visual "reconstruction" of the AES key from 2+ shares
  return frags.join('').replace(/-/g, '').slice(0, 32).toUpperCase();
}
