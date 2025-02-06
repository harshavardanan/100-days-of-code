class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        d = {i:words.count(i) for i in words}
        sorted_words = sorted(d.keys(), key=lambda word: (-d[word], word))
        return sorted_words[:k]