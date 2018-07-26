function chooseBestSum(t, k, ls) {
    if (ls.length < 3)
        return null;
      var result = 0;
      function dfs(t, k, ls, start, path)
      {
        if (path.length == k)
        {
          var sum = path.reduce(function(a, b) {
            return a + b;
          }, 0);
          if (sum <= t)
            result = Math.max(result, sum);
          return;
        }
        for (let i = start; i < ls.length; i++)
        {
          path.push(ls[i]);
          dfs(t, k, ls, i+1, path);
          path.pop();
        }
      }
      dfs(t, k, ls, 0, []);
      return result === 0 ? null : result;
      
  }