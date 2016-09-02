# levenshtein-map

Levenshtein map is a collection that allows you to create a 'best match' storage
class. It uses the Levenshtein distance algorithm to calculate what is the best
fit.

## How to use it

As simple as it sounds:

```
let map = new LevenshteinMap()
map.put('bananas', 'test')
map.put('emmm', 'bananas!')

map.get('banan') // It will return 'test'
map.get('emm') // it will return 'bananas!'
```

Exact matches will have precedence over Levenshtein algorithm.

## Contribute

Please feel free to open issues or PRs if you want to discuss something or
improve it.
