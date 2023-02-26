//1)每人10張牌(2 player)
//2)每人輪流抽頭一張放出去(空白鍵放牌), 然後有個counter數1, 2, 3, ........10,之後變返1開始
//3)如果放出去張牌同counter數一樣, 2個玩家斗快㩒制, e.g. playerA: A , playerB: B
//4)邊個最快㩒就贏, 輸左果個要拎哂D牌走




//2個array:  [playerA's card arr]  [playerB's card arr] <--(D卡random) or maybe 2 state??
//counter: 每㩒next btn , counter+1
//空白鍵放牌: 
//(playerA sin then playerB) card[arr - [0]]
//let table= [arr]; <----push 出左ge牌入去
//斗快㩒制: 
//let sort = []; let loser = "";
//e.target = keyA or keyB先? 順序push入sort[arr]
//sort[1] = Key A? = A; Key B? = B;  loser = A/B;
//push table[arr] --> loser's card[arr], then table[empty arr]
//the end : 邊個card[arr].length == 0 ======= win;



//          input playerAs name     input playerBs name
//                         start button


//          hide input and the start button --> show below items

//                            counter
//                          current card
//                          next button
// playerA's card total: 10             playerB's card total: 10


//                     Player X Win The Game
//                          restart button


