export {
  users,
  posts,
}

const userroute = 'src/img/users/'
const postroute = 'src/img/posts/'

const users = [
  {
    id: 1,
    name: 'taro',
    email: 'taro@example.com',
    password: 'taro',
    image: userroute+'taro.jpg',
    follows: [2, 3],
  },
  {
    id: 2,
    name: 'jiro',
    email: 'jiro@example.com',
    password: 'jiro',
    image: userroute+'jiro.jpg',
    follows: [1, 3],
  },
  {
    id: 3,
    name: 'saburo',
    email: 'saburo@example.com',
    password: 'saburo',
    image: userroute+'saburo.jpg',
    follows: [1, 2],
  },
]

const posts = [
  {
    id: 1,
    title: 'オムライス',
    description: 'オムライスは、調理済みの米飯を鶏卵でオムレツのように包んだ日本の洋食。英語のomelet（あるいはフランス語のomelette）とriceを組み合わせた和製外来語である。',
    image: postroute+'omrice.jpg',
    user_id: 1
  },
  {
    id: 2,
    title: 'からあげ',
    description: 'から揚げ（からあげ、空揚（げ）、唐揚（げ））とは、食材に小麦粉や片栗粉を薄くまぶす程度で、衣をつけずに高温の油で揚げること[1]。また、その料理[1]。英語では「fry」（フライ）で[2]料理名ではフライドチキン、フライドポテトなど「fried〜」となる。中国語では揚げものは「油炸」（ヨウチャ）と呼ばれて何もつけず揚げるから揚げは「清炸」（チンチャ）、衣をつけるのは「乾炸」（カヌチャ）[3]。いわゆる揚げ物の一種。',
    image: postroute+'karage.jpg',
    user_id: 1
  },
  {
    id: 3,
    title: 'ハンバーグ',
    description: 'ハンバーグ (Hamburg) は、肉料理の一種で、正式名称はハンバーグステーキ (Hamburg steak)。ハンバーグの起源は18世紀頃のドイツ・ハンブルクでのタルタルステーキとされ、名前の由来もハンブルクが転訛してハンバーグとなったものである[1]。英語においては、「ハンバーグ」は都市としてのハンブルクを意味するため、後述のパンを用いた料理も含めた総称として「ハンバーガー（hamburger：ハンブルク風の）」 が同義語として使用されている。',
    image: postroute+'hamberg.jpg',
    user_id: 1
  },
  {
    id: 4,
    title: '餃子',
    description: '餃子（ギョウザ、ギョーザ、拼音: jiǎozi）とは、小麦粉を原料とした皮で、肉、エビ、野菜などで作った餡を包み、茹でたり、焼くなどした食べ物である。調理の方法によって、水（茹で）餃子、焼き餃子、蒸し餃子、揚げ餃子などと呼ばれる。まず、餃子の一つの発祥地である中国の餃子から解説し、その後、異なる発祥地の満州引揚者によってもたらされ、日本独自に変化した餃子について解説する。',
    image: postroute+'gyoza.jpg',
    user_id: 2
  },
  {
    id: 5,
    title: '麻婆豆腐',
    description: '麻婆豆腐（まーぼーどうふ）は中華料理（四川料理）の1つで、挽肉と赤唐辛子・花椒（ホアジャオ、山椒の同属異種）・豆板醤（トウバンジャン、豆瓣醤）、トウチ（豆豉）などを炒め、鶏がらスープを入れて豆腐を煮た料理。',
    image: postroute+'mabo.jpg',
    user_id: 2
  },
  {
    id: 6,
    title: 'ピザ',
    description: 'ピザ（伊: pizza[注 1][注 2][注 3]）は、小麦粉、水、塩、イースト、砂糖、少量のオリーブ油をこねた後に発酵させて作った生地を丸く薄くのばし、その上に具を乗せ、オーブンや専用の竃などで焼いた食品である。ピッツァとも言う。小サイズのものは、区別してピッツェッタ（伊: pizzetta）と呼ばれることもある。',
    image: postroute+'pizza.jpg',
    user_id: 3
  },
  {
    id: 7,
    title: 'スパゲッティ',
    description: 'スパゲッティ（スパゲティー、スパゲッティー、スパゲティなどとも、イタリア語: Spaghetti[1]）は、イタリア料理で使われる麺類であるパスタのひとつで、紐のように細長いものをいう。イタリア本国においては数あるパスタの中でヌードルの一種を指す代表的なパスタであり、よく食べられているパスタの一つでもある。',
    image: postroute+'spagetti.jpg',
    user_id: 3
  },
]