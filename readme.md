# PowerAdsBlocker
強引に(コンテンツもろとも)広告を消すChrome拡張機能です。

> [!CAUTION]
> Chrome拡張機能と言っていますがChromiumの機能であるため、Edge、Brave、Vivaldi等でも使用可能です。
## How works
拡張機能読込時に、全てのDOM要素を削除し、コンテンツもろとも広告が消えます。  
ちゃんとJSであとから追加しても`MutationObserver`で消します。  
意味無し♨