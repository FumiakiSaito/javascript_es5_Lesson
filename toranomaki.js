/**
 * データ型判定
 */
console.log(typeof "hoge");    // string
console.log(typeof 10);        // number
console.log(typeof 10.5);      // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefind
console.log(typeof null);      // object これはECMAScriptの標準としは間違いであるが仕様である。

/**
 * プリミティブ型のメソッド
 */
var name = "Hoge";
var lowercaseName = name.toLowerCase(); // "hoge"
var firstLetter = name.charAt(0);       // "H"
var middleOfName = name.substring(2,3); // "og"

var count = 10;
var fixedCount = count.toFixed(2); // "10.00"
var hexCount = count.toString(16); // "a"

var flg = true;
var stringFlag = flag.toString(); // "true"







/**
 * オブジェクト
 */
// 割り当てられた変数に直接格納されずポインタが格納される
// のでobject1とobject2は同じオブジェクトを参照している
var object1 = new Object();
var object2 = object2;

// いつでもプロパティを追加できる
// ただしこれは使うべきではない
var object3 = new Object();
object3.myProperty = 'good';
console.log(object3.myProperty);


/**
 * オブジェクトリテラル
 */
var book = {
    name: "オブジェクト指向",
    year: 2016
}
console.log(book.name); // "オブジェクト指向"

// プロパティ名には文字列リテラルも使える（特殊文字を使う場合はこっち）
var book2 = {
    "name": "オブジェクト指向",
    "year": 2016
}

// これは↑と全く同じ挙動
var book = new Object();
book.name = "オブジェクト指向";
book.year = 2016;



/**
 * オブジェクトをループしたい時
 */
var person = {
    name: "taro",
    height: 180,
    weight: 70
};

for (var property in person) {
    console.log(person[property]); // これがブラケット記法の使いドコロ
};
// "taro"
// 180
// 70


/**
 * オブジェクトのキーを取得
 */
var person = {
    name: "taro",
    height: 180,
    weight: 70
};
console.log(Object.keys(person)); // [ 'name', 'height', 'weight' ]




/**
 * 配列リテラル
 */
var colors = ["red", "blue", "green"];
console.log(colors[0]); // "red"

// これは↑と全く同じ挙動
var colors = new Array("red", "blue", "green");
console.log(colors[0]); // "red"



/**
 * forEach
 */
var numbers = [1,2,3];
numbers.forEach(function(value,index,array) {
    console.log(value, index, array);
});
// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]



/**
 * 正規表現リテラル
 */
var numbers = /\d+/g;

// これは↑と全く同じ挙動
var numbers = new RegExp("\\d+", "g");

/**
 * 参照型のデータ型判定
 */
// 関数以外の参照型をtypeofで判定すると全て"objectとなる
// なので　instanceofで判定する
var items = [];
var object = {};

console.log(items instanceof Array);   // true
console.log(object instanceof Object); // true

// 配列に関してはECMAScript5からArray.isArrayで判定できる
var items = [];
console.log(Array.isArray(items)); // true;



/**
 * 関数
 */
// 関数宣言
// 関数宣言では"巻き上げ"が起こるのでまだ定義していないfunctionを実行できる
add(1, 2);

function add(num1, num2) {
    return num1 + num2;
}

// 関数式
// 関数式では巻き上げが起こらない。
var add  = function(num1, num2) {
    return num1 + num2;
}
add(1, 2);

/**
 * オブジェクトメソッド
 */
var person = {
    name: "taro",
    sayName: function () {
        console.log(person.name + "です");
    }
}
person.sayName(); // "taroです"

// thisが使えるのでthisを使ったほうがよい
var person = {
    name: "jiro",
    sayName: function () {
        console.log(this.name + "です");
    }
}
person.sayName(); // "jiroです"


/**
 * thisの値を操作
 * call()
 * apply()
 * bind()
 */

// call())
function sayNameForAll() {
    console.log(this.name);
}
var person1 = {
    name: "taro"
};
var person2 = {
    name: "jiro"
};
// 関数のcallメソッドを使うとthisになるべきオブジェクトを渡せる(ここではやってないがパラメータも渡せる)
sayNameForAll.call(person1); // taro
sayNameForAll.call(person2); // jiro



function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name: "taro"
};
var person2 = {
    name: "jiro"
};
// 関数のapplyメソッドを使うとthisになるべきオブジェクトとパラメータを"配列"として渡せる
sayNameForAll.apply(person1, ["パーソン1"]); // パーソン1:taro
sayNameForAll.apply(person2, ["パーソン2"]); // パーソン2:jiro


function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name: "taro"
};
// 関数のbindメソッドで変数を作成し、パラメータを渡して実行すると、thisになるべき値とパラメータが渡される
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("パーソン1"); // パーソン1:taro


/**
 * ゲッターセッター
 * get,setキーワードを使う実装できる
 */
var person1 = {
    _name: "taro",

    get name() {
        return this._name;
    },

    set name(value) {
        this._name = value;
    }
}

console.log(person1.name); // taro
person1.name = "jiro";
console.log(person1.name); // jiro



/**
 * コンストラクタ
 */
function Person(name) {
    this.name = name;

    this.sayName = function() {
        console.log(this.name);
    };
}

var person1 = new Person("taro");
var person2 = new Person("jiro");

person1.sayName(); // taro
person2.sayName(); // jiro


// ベストなクラス的定義
function Persion(name) {

    // メンバ変数の定義
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(newName) {
            name = newName;
        },
        enumerable: true,
        configurable: true
    });

    // メソッドの定義
    this.sayName = function() {
        console.log(this.name);
    };
}


/**
 * クロージャ
 */
// 関数の中に関数が書ける。それは自分を囲むスコープにある変数を参照できる
function func() {
  var value = 1;

  function innerFunc() {
    value++;
  }
  innerFunc();
  console.log(value); // 2
}
func();


// クロージャ実践例：モジュールパターン
var module = (function() {
  var count = 0;
  return {
    increment: function() {
      count++;
    },
    show: function() {
      console.log(count);
    }
  };

})();

module.show(); // 0
module.increment();
module.show(); // 1
console.log(count); // undefined
