window.addEventListener("load", init);

function init() {
    // const cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"];
    const cards = ["1", "2", "2", "1", "3", "4", "3", "4"]
    let cardClicks = 0;
    let selected1;
    let selected2;
    let previousCard;
    let intervalTimer;
    let gameStartTime;
    let matchCount = 0;
    let matchMiss = 0;

    $('.starting').click(function() { playGame('.welcomebox'); });
    $('.again').click(function() { playGame('.game-finish'); });
    $('.btn').click(function() { restart(); });

    function playGame(target) {
        $(target).fadeOut();
        $(".cardboard").empty()
        initialize();
    }

    function restart() {
        $(".cardboard").empty()
        clearInterval(intervalTimer);
        matchCount = 0;
        matchMiss = 0;
        initialize();
    }

    function initialize() {
        $(".missmatch").text("Missed matches:" + matchMiss);

        cardContent = shuffle(cards);

        for (let i = 0; i < 8; i++) { // change to 80
            let card = "<div class='flip-card'><div class='flip-card-inner' id='card" + i + "'><div class='flip-card-front' ></div><div class='flip-card-back memo" + cardContent[i] + "'></div></div></div>"
            $(".cardboard").append(card);
        }

        $('#card0').click(function() { selectCard(0, cardContent[0]) });
        $('#card1').click(function() { selectCard(1, cardContent[1]) });
        $('#card2').click(function() { selectCard(2, cardContent[2]) });
        $('#card3').click(function() { selectCard(3, cardContent[3]) });
        $('#card4').click(function() { selectCard(4, cardContent[4]) });
        $('#card5').click(function() { selectCard(5, cardContent[5]) });
        $('#card6').click(function() { selectCard(6, cardContent[6]) });
        $('#card7').click(function() { selectCard(7, cardContent[7]) });
        $('#card8').click(function() { selectCard(8, cardContent[8]) });
        $('#card9').click(function() { selectCard(9, cardContent[9]) });
        $('#card10').click(function() { selectCard(10, cardContent[10]) });
        $('#card11').click(function() { selectCard(11, cardContent[11]) });
        $('#card12').click(function() { selectCard(12, cardContent[12]) });
        $('#card13').click(function() { selectCard(13, cardContent[13]) });
        $('#card14').click(function() { selectCard(14, cardContent[14]) });
        $('#card15').click(function() { selectCard(15, cardContent[15]) });
        $('#card16').click(function() { selectCard(16, cardContent[16]) });
        $('#card17').click(function() { selectCard(17, cardContent[17]) });
        $('#card18').click(function() { selectCard(18, cardContent[18]) });
        $('#card19').click(function() { selectCard(19, cardContent[19]) });
        $('#card20').click(function() { selectCard(20, cardContent[20]) });
        $('#card21').click(function() { selectCard(21, cardContent[21]) });
        $('#card22').click(function() { selectCard(22, cardContent[22]) });
        $('#card23').click(function() { selectCard(23, cardContent[23]) });
        $('#card24').click(function() { selectCard(24, cardContent[24]) });
        $('#card25').click(function() { selectCard(25, cardContent[25]) });
        $('#card26').click(function() { selectCard(26, cardContent[26]) });
        $('#card27').click(function() { selectCard(27, cardContent[27]) });
        $('#card28').click(function() { selectCard(28, cardContent[28]) });
        $('#card29').click(function() { selectCard(29, cardContent[29]) });
        $('#card30').click(function() { selectCard(30, cardContent[30]) });
        $('#card31').click(function() { selectCard(31, cardContent[31]) });
        $('#card32').click(function() { selectCard(32, cardContent[32]) });
        $('#card33').click(function() { selectCard(33, cardContent[33]) });
        $('#card34').click(function() { selectCard(34, cardContent[34]) });
        $('#card35').click(function() { selectCard(35, cardContent[35]) });
        $('#card36').click(function() { selectCard(36, cardContent[36]) });
        $('#card37').click(function() { selectCard(37, cardContent[37]) });
        $('#card38').click(function() { selectCard(38, cardContent[38]) });
        $('#card39').click(function() { selectCard(39, cardContent[39]) });
        $('#card40').click(function() { selectCard(40, cardContent[40]) });
        $('#card41').click(function() { selectCard(41, cardContent[41]) });
        $('#card42').click(function() { selectCard(42, cardContent[42]) });
        $('#card43').click(function() { selectCard(43, cardContent[43]) });
        $('#card44').click(function() { selectCard(44, cardContent[44]) });
        $('#card45').click(function() { selectCard(45, cardContent[45]) });
        $('#card46').click(function() { selectCard(46, cardContent[46]) });
        $('#card47').click(function() { selectCard(47, cardContent[47]) });
        $('#card48').click(function() { selectCard(48, cardContent[48]) });
        $('#card49').click(function() { selectCard(49, cardContent[49]) });
        $('#card50').click(function() { selectCard(50, cardContent[50]) });
        $('#card51').click(function() { selectCard(51, cardContent[51]) });
        $('#card52').click(function() { selectCard(52, cardContent[52]) });
        $('#card53').click(function() { selectCard(53, cardContent[53]) });
        $('#card54').click(function() { selectCard(54, cardContent[54]) });
        $('#card55').click(function() { selectCard(55, cardContent[55]) });
        $('#card56').click(function() { selectCard(56, cardContent[56]) });
        $('#card57').click(function() { selectCard(57, cardContent[57]) });
        $('#card58').click(function() { selectCard(58, cardContent[58]) });
        $('#card59').click(function() { selectCard(59, cardContent[59]) });
        $('#card60').click(function() { selectCard(60, cardContent[60]) });
        $('#card61').click(function() { selectCard(61, cardContent[61]) });
        $('#card62').click(function() { selectCard(62, cardContent[62]) });
        $('#card63').click(function() { selectCard(63, cardContent[63]) });
        $('#card64').click(function() { selectCard(64, cardContent[64]) });
        $('#card65').click(function() { selectCard(65, cardContent[65]) });
        $('#card66').click(function() { selectCard(66, cardContent[66]) });
        $('#card67').click(function() { selectCard(67, cardContent[67]) });
        $('#card68').click(function() { selectCard(68, cardContent[68]) });
        $('#card69').click(function() { selectCard(69, cardContent[69]) });
        $('#card70').click(function() { selectCard(70, cardContent[70]) });
        $('#card71').click(function() { selectCard(71, cardContent[71]) });
        $('#card72').click(function() { selectCard(72, cardContent[72]) });
        $('#card73').click(function() { selectCard(73, cardContent[73]) });
        $('#card74').click(function() { selectCard(74, cardContent[74]) });
        $('#card75').click(function() { selectCard(75, cardContent[75]) });
        $('#card76').click(function() { selectCard(76, cardContent[76]) });
        $('#card77').click(function() { selectCard(77, cardContent[77]) });
        $('#card78').click(function() { selectCard(78, cardContent[78]) });
        $('#card79').click(function() { selectCard(79, cardContent[79]) });

        setTimeout(function() { startTimer() }, 700);
    }

    // *----------- time area -------------*
    function startTimer() {
        gameStartTime = new Date().getTime();
        intervalTimer = setInterval(incrementTime, 100); // Interval set!
    }

    function incrementTime() {
        let currentTime = getCounterTime();
        $(".timer").text(currentTime); // showing time.
    }

    function getCounterTime() {
        let newTime = new Date().getTime();
        let timeDiff = newTime - gameStartTime;

        let millis = timeDiff % 1000;
        let secs = Math.floor((timeDiff % (1000 * 60)) / 1000);
        let mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        secs = ('0' + secs).slice(-2);
        mins = ('0' + mins).slice(-2);

        let displayTime = mins + ":" + secs + ":" + millis;

        return displayTime;
    }

    // *----------- card area ------------*
    function selectCard(id, current) {
        let cardID = "#card" + id;

        if (!$(cardID).hasClass('rotate') && cardClicks != 2) {
            $(cardID).addClass('rotate');
            cardClicks++;

            if (cardClicks === 1) {
                selected1 = current;
                previousCard = cardID;
            }
            if (cardClicks === 2) {
                selected2 = current;
                if (selected1 === selected2) {
                    matchCount++;
                    if (matchCount === 4) { //change to cards.length/2!
                        gameOver()
                    }
                    setTimeout(() => {
                        cardClicks = 0;
                    }, 350);
                } else {
                    setTimeout(() => {
                        matchMiss++
                        $(".missmatch").text("Missed matches:" + matchMiss);
                        $(".missmatch2").text(matchMiss);

                        $(cardID).removeClass('rotate');
                        $(previousCard).removeClass('rotate');
                        cardClicks = 0;
                    }, 350);
                }
            }
        }
    }

    function gameOver() {
        clearInterval(intervalTimer);
        matchCount = 0;
        matchMiss = 0;
        let currentTime = getCounterTime();
        $(".timer").text(currentTime); // showing time.
        $(".timer2").text(currentTime);
        setTimeout(function() { $(".game-finish").show() }, 700);

    }

    function shuffle(arr) {
        let leng = arr.length,
            holded, index;

        while (leng > 0) {
            index = Math.floor(Math.random() * leng);
            leng--;
            holded = arr[leng];
            arr[leng] = arr[index];
            arr[index] = holded;
        }
        return arr;
    }
}