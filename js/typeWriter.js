
let i = 0;
let text1 = "Hey! Miss Karen Mae Arnaez.";
let text2 = "Hi bebu. 3rd month na ba tayo? I think it should be 2nd month palang?  Anywayyyyyy. Happy monthsary to us my love. We're only on our 2nd month but it feels like we've been together for so looooooooong. Maybe because this relationship is perfect for us? It's what we are praying and wishing. I know that in the eyes of other people, what we have is so wrong. Pero for me, it feels so right. You are right for me. It took us so many wrong turns in before meeting each other. But in the end, it is meant for us. Love, I am so grateful for everything that you are doing for me, for us. Alam ko sobrang gulo ngayon. Alam ko din na at times we might feel burned out from everything na nangyayaring hindi maganda satin. We just have to learn how to keep ourselves grounded. What's important is that we are still fighting for our love. Right? I don't wanna lose you my love. Thank you for putting up with my attitude. I pray that you'll stay as sweet, caring. loving girlfriend as you are. You are the one I wanna spend the rest of my life with: I love you so so much bebu. How do you wanna spend our day later? Do you have something in mind?"
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
