const quiz = [
    {
        question: '四本の身長は次の内どれ？',
        answers: [
            '163cm',
            '183cm',
            '173cm',
            '173m'
        ],
        correct: '173cm'
    },{
        question: '四本の体重は次の内どれ？',
        answers: [
            '64kg',
            '76kg',
            '84kg',
            '7.4t'
        ],
        correct: '74kg'
    },{
        question: '四本の血液型は次の内どれ？',
        answers: [
            'A型',
            'B型',
            'O型',
            'AB型'
        ],
        correct: 'A型'
    },{
        question: '四本に彼女は居る？',
        answers: [
            '居たことがない',
            '今はいない',
            'それっぽいのは居る',
            'めっちゃラブラブ'
        ],
        correct: 'めっちゃラブラブ'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//定数の文字列をHTMLに反映させる
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    };
};
setupQuiz();
// document.getElementById('js-question').textContent = question;

// let buttonIndex = 0;
// while(buttonIndex < $button.length){
//     $button[buttonIndex].textContent = answers[buttonIndex];
//     buttonIndex++;
// }
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

//ボタンクリックで正誤判定
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!');
        score++;
    } else {
        window.alert('不正解！');
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz(),
        quiz[quizIndex];
    }else{
        window.alert('終了！！あなたの正解数は' + score + '/' + quizLength + 'です！！');
    }
};

let handleIndex = 0;
while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click',(e) => {
        clickHandler(e)});
        handleIndex++
};
// $button[0].addEventListener('click',(e) => {
//     clickHandler(e)
// });

// $button[1].addEventListener('click',(e) => {
//     clickHandler(e)
// });

// $button[2].addEventListener('click',(e) => {
//     clickHandler(e)
// });

// $button[3].addEventListener('click',(e) => {
//     clickHandler(e)
// });


// 