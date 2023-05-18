import React from 'react';

import Hero from '../components/layout/Hero';
import { Box, Heading } from '@chakra-ui/react';
import { Social } from '../components/atoms/Social';
import { Inner } from '../components/layout/Inner';
import eyecatch from '../images/hero.png';
import Meta from '../components/molecules/Meta';
import PostBodyCss from '../components/post-body';
const About = () => {
  return (
    <>
      <Meta
        pageTitle="アバウト"
        pageDesc="自らの使命"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="~自らの使命〜" />

      <Inner>
        <Box w={{ base: '100%', md: 600 }} pb={50}>
          <PostBodyCss>
            <h1>
              作りたいものを作れるようになる。
              <br />
              そして、それはきっと終わらない。
              <br />
              <br />
            </h1>
            <p>とかカッコつけてみたけど、ちょっと恥ずかしい...</p>
            <br />
            <br />
            <h2 style={{ fontWeight: 'bold' }}>僕の力の源泉</h2>
            <p style={{ color: '#d44a20', fontWeight: 'bold' }}>
              1,助けたい人を助けれる人間になる
              <br />
              2,多くの人に役立つアプリを作りたい。
            </p>
            <h2 style={{ fontWeight: 'bold' }}>この1年の大まかな活動</h2>
            <p style={{ color: '#d44a20', fontWeight: 'bold' }}>
              自分の強み
              <br />
              なぜプログラミングを学ぶか
              <br />
              なぜ、プロンプトを今学ぶのか？
              <br />
              1年の大まかな流れ
            </p>
            <br />
            <p>
              以降では、1、2ついて主に話していこうと思います。それ以外も話しますのでちょっと長くなりますが読んでいただけると幸いです
            </p>
            <br />
            <br />
            <br />
            <h2>1,助けたい人を助けれる人間になる</h2>
            <br />
            <br />
            <p>
              僕の根源的な原動力は、この「助けたい人を助けられるようになる」です。
              <br />
              <br />
              なぜなら、後悔をしてあの時こうしておけばよかったなんて絶対に言いたくないからです。
              よくある話で、子供に手術を施したいが、お金がなくて救えなかったというエピソードがあります。
              もし僕がそのような状況になったら必ずこう思います。
              <br />
              <br />
              なんでもっとお金を稼ぐ「努力」をしなかったんだと。
              <br />
              <br />
              僕は許せない自分になりたくないのです
              今を生きる自分が、過去を嘆いて後悔し続ける人間には決してならないよう、後悔しないために
              僕は休日であっても、夏休みであっても、コロナになっても言い訳をねじ伏せて努力します。全ては後悔しないために、胸張って生きれるように。
              <br />
              <br />
              そういったメンタルを持った僕はSNS作品をプログラミングを始めてから7ヶ月で完成にまで持っていけました。でもまだ努力が足りません。もっともっとやらなければいけないです。16時間努力できるようにこれからも上を目指して進みたいです
              <br />
              <br />
              もちろん時間だけではいけません、より質高くしていく必要があります。
              なぜ自分はこの言語を学ぶのか？どのようにアウトプットするのがいいのか？など行動を起こす前には必ず自問し決定します。
              一度決めたらその決断を信じて疑わず没頭します。
              <br />
              <br />
              より多くの時間で、質と量をうまく組み合わせてその両輪で自分を最大化し、あの時やっておけばよかったなんてものを一つとして残さないために、頑張り続けています
            </p>
            <br />
            <br />
            <br />
            <h2>2,多くの人に役立つアプリを作りたい。</h2>
            <br />
            <br />
            <p>
              僕が作りたいのは特にSNSです。
              <br />
              <br />
              なぜSNSを作りたいのかというとそれはサービスとしての影響力がとても強いからです。
              Instagram、Youtube、TikTokユーザーが何十億といるサービスは総じてそういったソーシャルメディアです。
              自分が作ったサービスで、日本と世界を驚かせたいのです。
              <br />
              <br />
              そして、電車で隣の席に座っている人が当たり前のように使っていて、「それぼくたちが作ったんだよ！」とまんべんのドヤ顔で
              自慢できるようになりたいです！
              <br />
              <br />
              でも競合がとんでもないじゃんというのはよくわかります。
              ただ、そっちの方が個人的に燃えます。敵は大きければ大きいほど、やる気がでまくりますので、せっかく生まれてきた人生ですから、大物狙いましょうぜ
            </p>
            <br />
            <br />
            <br />
            <h2>自分の強み</h2>
            <br />
            <br />
            <p style={{ color: '#d44a20', fontWeight: 'bold' }}>
              ・メンタルが強い
              <br /> ・行動力がある <br />
              ・努力ができる <br />
              ・仕組み化した独自のマニュアルを持っている
            </p>
            <p>
              <br />
              自分の強みは圧倒的自信(メンタル)から生み出される「行動力」と、「努力」です。その両輪が主に自分が自分たらしめていると思っております
              <br />
              <br />
              そして残った強みの仕組み化ですが、これは自分が数々の茨の道を経験し培った失敗と成功の産物です。これがあるから私はどんなに「やる気が無くても努力」ができます。
              <br />
              <br />
              ぼくは学習をする際なぜ今日は調子がよかったのか、なぜできたのか、逆になぜできなかったか。
              などを、それぞれ共通点を抽出して、成功と失敗の原因を探り、
              たとえ調子が悪くても同じパフォーマンスを発揮できる再現性の実現のため仕組み化してきました
              <br />
              <br />
              その結果、心がたとえ折れても、折れながらでも努力し続けられるだろうなというゾンビが出来上がったのです
              <br />
              <br />
              この4つの強みがある自分は、必ず目的を果たすと強く信じています
            </p>
            <br />
            <br />
            <br />
            <h2>なぜプログラミングを学ぼうとしたか</h2>
            <br />
            <br />
            <p>
              僕は立派な経営者になって、世にサービスを売り出したいと考えていました。
              思い浮かんだものを実行できるスキルが欲しいと思ったのです。
              アイディアに価値はないと思います。それは、実行できなければ意味がないからです。
              そして、次に重要なのはアイディアをいかに早く形にするかです
              <br />
              <br />
              それをいかに早く作り、世に出し、目新しいものをいち早く届け印象に残すかというのが最近重要なんではと思っております。
            </p>
            <p>
              今はchatgpt apiを叩けば、何を出しても目新しいサービスになります。
              これはまさに速さの勝負です
              この簡単に差別化したサービスを作れる現状で、出し尽くされる前にサービスを作らなければいけません！
            </p>
            <p>
              そして差別化したサービスを生み出すことに大きな労力は必要ありません。
              まだ差別化するにあたってサービスが飽和していないからです。
              Chatgptによって作れるサービスはオリジナリティー溢れるサービスになります
              そしてそれはapiをたたき適切なプロンプトを用意するだけで実現できます
            </p>
            <br />
            <p>
              まだ目新しいサービスとして認知される今だからこそ
              そう思われている今のタイミングで作らなければいけないのです。
            </p>
            <br />
            <p>
              速さが重要だと、ヨーイドンで始まったプロンプト競争です
              より良い出力を目指して戦う時代だと思っています
            </p>
            <br />
            <br />
            <br />
            <h2>なぜ、プロンプトを今学ぶのか？</h2>
            <br />
            <br />
            <br />
            <p>
              当初はフロントエンドに学習を集中させる手筈でしが、GPTに触れていく過程で、プロンプトエンジニアが一過性のブームであるという認識はなくなりました
              <br />
              <br />
              おそらくではありますが、「フロントエンドとバックエンドを両方やる現象」と同様に、「フロントエンドあるいはバックエンドとプロンプトエンジニア」というものは少なからず「統合」されると考えています。
              <br />
              よっぽど予算に余裕のある企業でない限り必ずやれよと多分なります
              <br />
              <br />
              新しいフレームワークや技術と追いかけっこするのが今のエンジニアだと思いますが、ChatGPTのバージョン変更で同様の現象がこの先起きてくるでしょう。
              <br />
              <br />
              新しいプロンプトで書けばより「良い出力が得られる」や「文字数が減る」など、質と正確性を求めて追いかけっこが始まることになるでしょう
              <br />
              <br />
              AIが自立して、プロンプトという促しを受けず、思考できる段階になるまでプロンプトエンジニアは続くと考えているので、現時点では個人的ではありますが、エンジニア必須スキル認定です
              <br />
              <br />
              このタイミングでプロンプトを学ぶ理由は
              <br />
              ヨーイドンで始まったプロンプト技術を積極的に自らのサービスに導入しようと学ぶことで、ベテランエンジニアと同じ次元でプロンプトスキルを磨くことができるからです。
              <br />
              <br />
              この領域に足を踏み入れgptを使って、誹謗中傷をなくしたいです。そういった過程で、プロンプト技術をより洗練させて時代の波に乗り良いサービスを作ってみんなに使ってもらえるようにしたいです！
              <br />
              <br />
              また、就活が終わったら、勉強会で友人となった方々を年齢問わず誘って、apiを叩きながら一発あてにいきたいので、僕のプロンプト技術は果てがありません！
            </p>
            <br />
            <br />
            <br />
            <h2> 1年の大まかな流れ</h2>
            <br />
            <br />
            <p>
              今更すぎますが簡単な自己紹介！今更すぎ！！ <br />
              僕は現Webデザイン学科2年生の19歳
              Instagramを超えるサービスを世界中の人に提供したいという理由で入学。
              プログラミング経験はなしでこの学科に入り、一番最初のタイピングテストで
              最下位という称号をいただく。
              <br />
              <br />
              後に7ヶ月でSNSを完成する
              <br />
              <br />
              以降時系列で簡単にやってきたことを記載します
            </p>
            <h3>4月　読書をする</h3>
            <p>
              入学当初はプログラミングをやっていませんでした
              プログラミングを習得してサービスを完成させるなんて時間がかかりすぎる、どうしようかと悩み。
              ビジネス書などを読み耽り、自分のこれからの指針と行動の最適解を学ぼうとおそらくは一ヶ月に6冊とか読んだりしていました
              あとは簿記などをやったり手当たり次第でした。 そして気づきます。
              これ読んでもダメなやつだ。何かしたければ行動を起こしてみないと！ということでなんか適当なサービスを考え、行動に移します
            </p>
            <h3>5月　サービスを考え営業をかける</h3>
            <p>
              適当なサービスというのはいわゆる出前館、UberEats的なサービスです
              高齢者のスマホ普及率が上がっているといえど宅配サービスの存在はあまり知られていないと考え、高齢者をターゲットにスーパーの食品を宅配する感じのサービスを思いつきました
              <br />
              まず高齢者が住んでいる住宅を見抜く必要がありますが、それは建物の老朽化がそれ相応にすすんでいるとこを目安にピンポンしました。
              そしてスーパーとの往復を考え半径1km未満の地域であることを条件に良さそうな場所を探し、
              とりあえずやってみろの精神でこれらを踏まえて営業をかけましたが、なくなく敗北。
              <br /> <br />
              そして思いました。「僕めっちゃ不審者じゃね」と。サービスを出すことに焦りすぎたことに気づき一歩一歩確実に進むべきだ、焦るなと言い聞かせ、そこから一気にプログラミング勉強を開始します。
            </p>
            <h3>6~7月　Javascript、PHPを学び掲示板を作る</h3>
            <p>これに関しましては</p>
            こちらの記事を見ていただけると幸いです
            <br />
            <a href="https://my-portfolio-hub.vercel.app/blog/micro">
              https://my-portfolio-hub.vercel.app/blog/micro
            </a>
            7月の残った時間は友達4人をアプリ制作に誘い掲示板作って学校に広めようぜ！ということで僕が始めたのですが、Webサイト学科なのでみんなやる気が無く解散。
            他の学科の人と交友関係はなかったのですが、アプリ制作に誘ってみよう！と考えましたが、先生にWeb系はおらんよと言われチーム開発は行えず....無念。
            そのあとは、テトリス、シューティングゲームやマリオといったゲームを作りました。友達がハマったとかいって遊んでたのが嬉しかったです笑
            <h3>8月　Reactを学ぶ</h3>
            <p>
              Reactを選んだ理由はいろいろありますが、
              主には多くの人が使っていて、歴史もあり、技術トレンドが完全にReactだったことです
              なぜその理由で選んだかというと、人員の補充がより容易になるからです。
              <br /> <br />
              自分のサービスでチームメンバーを誘う場合、開発言語が多くの人に使われている場合メンバーの補充がしやすくなり、
              歴史があるので、一過性のトレンドで使用される言語とは違い、ある程度ながい寿命(4年くらい)が保障されてもいると判断したからです
              <br /> <br />
              また個人で学習するにあたって、blogなどの解説や本などの教材が豊富というのも大きな理由でした。そういった理由で僕はVueの方が簡単だからそれをやれという意見もあった中で、Reactを選択し、夏休みはみんなが遊んでいる中で猛勉強をしました。
              その間にデザインも勉強しようと思い、まず手始めにお絵描きを1日1時間して、モンスターしか描けなかった僕が、夏休みが終わった時には絵がうまくなってて友達が驚いてくれました。嬉しいですねっ
            </p>
            <h3>
              9月~10月　教材選びをミスする。blogサイトを作りながらバニラJSをより理解していく
            </h3>
            <p>
              この月は久しぶりにきつい月でした。
              参考書を間違えたのです。初心者でも大丈夫！みたいな本が、口だけというのは経験上わかっていましたが、
              それでもあまりにも難しい本にそれが貼られていることはなく、完全に油断していました
              <br />
              <br />
              僕はわからなくても、一度やり遂げろの精神でプログラミングには取り組んでいます。当時は難しそうに見えるだけで大したことないと思っていましたが、それが仇となり、おわらせようとしちゃったんです
              その結果2月ほぼ無駄にしてしまったのです、
              <br />
              <br />
              また、blogサイトも同時並行で作り、バニラJSを使いスコープやらグローバルスコープ、変数の参照など
              本当に基礎の基礎の部分の理解を深めていきました
            </p>
            <h3>11月　firebaseでSNSを作る</h3>
            <p>これはReactのアウトプットになります</p>
            <a href="https://my-portfolio-hub.vercel.app/blog/firebase">
              https://my-portfolio-hub.vercel.app/blog/firebase
            </a>
            <p>こちらの記事を読んでいただけると幸いです</p>
            <h3>　12月　Node.jsを学ぶ。親のWebサイトを作る</h3>
            <p>
              Node.jsを学び始めた理由はJSの非同期処理を理解したかったのが一番大きかったと思います
              JSの一番の難所と言われるところを早く克服し、立派なエンジニアに学生のうちからなりたくて学びました。{' '}
              <br />
              <br />
              あとはフロントエンドの需要が以前より増し、アメリカではよく使用されている言語なのでいずれ日本に来るだろうという考えもあり今のうちに学びました。
            </p>
            <h3>1月　SNSを作る</h3>
            <a href="https://my-portfolio-hub.vercel.app/blog/app">
              https://my-portfolio-hub.vercel.app/blog/app
            </a>
            <p>
              こちらの文章を読んでいただけると幸いです。語ると本当に止まらないのですが、楽しくもありいい試練でもあったと感じます
              一番苦労したところはと言われると本当に迷います笑
              <br />
              <br />
              フォロー機能もいいね機能も自分でアルゴリズムを考え実装した部分があったので、仮説を立証するにしてもものすごく時間と手間がかかりました。
              ですが強いていうなら、始める前が一番きつかったと思います
              <br />
              <br />
              atomic
              designというコンポーネント設計思想を使うことが初めてで、変に分割したら、壊れないか？など独学だからこそ予測できない不安感がありました。1ヶ月かけて作ったのに全て無にに記すのではないかと不安に駆られることもあり、踏み出す勇気がいりました。またNode.js自体2週間しか学習していなかったので、うまく理解していいね機能とか、そもそも投稿機能ですら実装できるかとか不安が割とありました笑
              <br />
              <br />
              でも、不安には負けないので踏み出し、完成まで持って行けました。先生も勉強してない範囲なので完全に独力で全てを解決してできて、一人でやって蹴る自信もより一層ついたと思います
            </p>
            <h3>1月　SNSを作る</h3>
            <p>
              以降はchatgptなどいろいろな取り組みをしています。また、残りの学生生活では、営業してWebサイトを作ってお金もらったり、SNSを勉強会で知り合ったエンジニアの方々を誘ってSNSを完成してリリースまで持っていきたいです！
              <br />
              <br />
              あとはyoutuberになってアプリをより広められる基盤を整えようかなと思っています。実はちょっとだけ動画投稿してます笑
              <br />
              <br />
              長くなりすみません！最後まで読んで頂きありがとうございます！
            </p>
          </PostBodyCss>
        </Box>

        <Box w={100}>
          <Heading fontSize={{ base: 1, md: 'md' }} color="gray.600">
            Contact
          </Heading>
          <Social />
        </Box>
      </Inner>
    </>
  );
};
export default About;
