        // ____________Count Buttons Starts____________
        var btnSubhanAllah = document.querySelector("#count1").addEventListener("click", subhanAllah);
        var btnalhamdulillah = document.querySelector("#count2").addEventListener("click", alhamdulillah);
        var btnAllahuAkbar = document.querySelector("#count3").addEventListener("click", allahuAkbar);
        var counter4 = document.querySelector("#counter4").addEventListener("click",counterUnlimited);
        //____________Count Buttons Ends____________


        //____________Reset Buttons Starts____________
        var btnReset1 = document.querySelector("#reset1").addEventListener("click", resetA);
        var btnReset2 = document.querySelector("#reset2").addEventListener("click", resetB);
        var btnReset3 = document.querySelector("#reset3").addEventListener("click", resetC);
        var btnReset4 = document.querySelector("#reset4").addEventListener("click", resetD);

        //____________Reset Buttons Ends____________


        //____________Card Text Find Starts____________

        var card_text = document.querySelector("#card_text1");
        var card_text2 = document.querySelector("#card_text2");
        var card_text3 = document.querySelector("#card_text3");
        var card_text4 = document.querySelector("#card_text4");
        //____________Card Text Find Ends____________ 



        //____________Function SubhanAllah Starts___________
        var numCount = 1;
        function subhanAllah() {
            if (numCount < 33) {
                card_text.innerHTML = numCount;
                numCount++;
            }
            else {
                card_text.innerHTML = "<span style='color:red; font-size:3rem;'>Shukran</span>"
            }
        }
        //____________Function SubhanAllah Ends___________



        //____________Function Alhamdulillah Starts___________
        var numCount2 = 1;
        function alhamdulillah() {
            if (numCount2 < 33) {
                card_text2.innerHTML = numCount2;
                numCount2++;
            }
            else {
                card_text2.innerHTML = "<span style='color:red; font-size:3.5rem;' >Shukran</span>"
            }
        }
        //____________Function Alhamdulillah Ends__________


        // ____________Function Allahu Akbar Starts ____________
        countAllah = 1;
        function allahuAkbar() {
            if (countAllah < 34) {
                card_text3.innerHTML = countAllah;
                countAllah++;
            }
            else {
                card_text3.innerHTML = "<span style='color:red; font-size:3rem;'>Shukran</span>"
            }
        }
        //  ____________Function Allahu Akbar Ends ____________


        //_________________Function Counter Start's ____________


        var counterall = 1;
        function counterUnlimited(){
            if(counterall<90000000){
                card_text4.innerHTML = counterall;
                counterall++;
            }
        }
        //________Reset Button SubhanAllah __________________
        function resetA() {
            numCount = 0;
            card_text.innerHTML = numCount;
        }


        //________Reset Button Alhamdulillah __________________
        function resetB() {
            numCount2 = 0;
            card_text2.innerHTML = numCount2;
        }


        //________Reset Button Allahu Akbar __________________
        function resetC() {
            countAllah = 0;
            card_text3.innerHTML = countAllah;
        }

        //___________Function_Reset_Button_CounterAll_______________


        function resetD(){
            counterall = 0;
            card_text4.innerHTML = counterall;
        }