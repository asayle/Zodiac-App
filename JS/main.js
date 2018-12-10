// // console.log("connected");

// first you capture the user input. then, you loop the user input
// through the array to see if there's a match. If there is a match, you can display the information
// in a separate div. This div will display the information through a paragraph element and an
// image element.

var myArr = [{
	sign: "Aries",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-aries_1024x1024.png?v=1517850072",
	description: "Those born under the Aries zodiac sign tend to have high energy and a thirst for life, leading them to seek out challenging experiences that can push them to new limits. A typical Aries is very driven and curious, and has a strong sense of justice. They tend to be very ambitious and thrive in a competitive environment, whether it’s intellectual or physical in nature. They are generally quite optimistic people, and feel very comfortable in leadership roles."
},{
	sign: "Taurus",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-taurus_1024x1024.png?v=1517849684",
	description: "Taurus is generally quite stubborn in a lot of areas in their lives - they have a strong dislike for change, and once they settle down with their routines, it can take a great effort to get them to change. They are not just stubborn, but also strong willed. They tend to stick to their guns and be very methodical about their approach to actions. Many under this zodiac sign therefore are full of integrity. Their determination and diligence is also the reason that many Taurus zodiac signs find success - they are hard workers that don’t mind getting their hands dirty, and alway see that what they set out to do is completed."
},{
	sign: "Gemini",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-gemini_1024x1024.png?v=1517844742",
	description: "Gemini's are social creatures and like to surround themselves with people. Being born under the planet Mercury, they are never more happy than when they are sharing ideas and projects with those around them. They love to chat and tend to list communication as very high on their priorities. Sometimes their enthusiasm for socializing can make them seem full of nervous, excited, seemingly manic energy."
},{
	sign: "Cancer",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-cancer_1024x1024.png?v=1517625158",
	description: "The Cancer zodiac sign is represented by the crab for a few reasons. Just like a crab they have a tight hold on what they love and often have trouble letting go. Crabs also move sideways, and those born under this zodiac sign tend to do this in their lives too."
},{
	sign: "Leo",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-leo_1024x1024.png?v=1517617612",
	description: "Just like the lions they are named for, many Leos that you meet will have quite a regal air about them. Being ruled by the Sun, they often are able to bring warmth, light and life into the lives of those that surround them. They like to surround themselves with a large social circle that will adore and appreciate them. Their natural charisma and dignity will often draw other signs to them, falling under Leo’s magnetic pull. Like our Sun in the solar system, Leo zodiac signs love being the center of attention. They thrive on flattery compliments - which often come to them easily. Most of them will have an innocent quality to them, their happy and outgoing nature makes them a joy to be around."
},{
	sign: "Virgo",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-virgo_1024x1024.png?v=1517590104",
	description: "While those born under the Virgo zodiac sign can seem very calm on the surface, there is much going on under the surface. Always deep in thought, they are calculating and assessing events and people around them. Their eagerness to understand means that they do have a tendency to jump to conclusions."
},{
	sign: "Libra",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-libra_1024x1024.png?v=1517444894",
	description: "Those born under this zodiac sign are extremely diplomatic and fair, and they hate to see others be unhappy around them due to unequal circumstances - meaning sometimes they can come off as a people pleaser. It is not so much that they are doing this for selfish or manipulative reasons, but rather because they are are seeking to create unity. Harmony is a word that is very important to this sign - and peace in all aspects of their life is an imperative. Often seen as quite charming, Libra is a sign that will only be frustrated and unhappy if they think or feel that they haven't been treated fairly."
},{
	sign: "Saggitarius",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-sagittarius_1024x1024.png?v=1517414803",
	description: "Sagittarius is a sign that loves to roam and wander. They don't like to be stuck in a routine that is boring and repetitive. They curiosity about all things drives them to have an adventurous lifestyle that allows them to move around and indulge in their love for questioning the world, dreaming about its mysteries and experiencing all the best pleasures it has to offer. Most have a large group of friends that they have accumulated during their travels, all who all have different lifestyles, opinions, tastes and experiences."
},
{
	sign: "Capricorn",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-capricorn_1024x1024.png?v=1517361013",
	description: "Capricorns tend to be very goal orientated and are one of the most self-disciplined zodiac signs. Some of the best scientists, politicians, leaders, and teachers in the world have Capricorn in their chart; unsurprising given their drive to succeed. Many Capricorns find it natural to set goals, calculate their path to them, and stick to them, and they will work long hard hours to complete what they set out to do. They are known for being extremely disciplined and patient, keeping their eye on the long-term prize. They have the understanding that what they seek is not won in a day, but rather, a long journey; one that takes commitment and dedication."
},
{
	sign: "Aquarius",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-aquarius_1024x1024.png?v=1517258109",
	description: "One of the most obvious traits of those born under the Aquarius zodiac sign is that they are kind, friendly and generous, though later you may find that they are quite guarded and may choose to keep some emotional distance. Alongside this, they are quite subversive and rebellious - filled with many quirks that make them memorable characters of the zodiac."
},
{
	sign: "Pisces",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-pisces_1024x1024.png?v=1517257307",
	description: "Those born under the zodiac sign Pisces are daydreamers - their mind tends towards the fantastical and mystical. They are introspective by nature, and this can lead others to find them either intriguing and mysterious - or other times boring or too quiet. If you look beneath their surface, most will have a brilliant inner life that they rarely share with other people around them. They care deeply for others, and Pisces can rarely stand to see their loved ones unhappy."
},
{
	sign: "Scorpio",
	img: "https://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-scorpio_1024x1024.png?v=1517441497",
	description: "Scorpios love to enjoy their own company, so much so that they can become irritated if they are not given their personal alone time. They are one of the most independent signs of the zodiac and work very well by themselves. Most of them will have an air of mysterious darkness around them, they are great at keeping secrets and feel emotions very intensely. Because of their independence, they tend to mature very quickly as children, and become fiercely determined (sometimes even forceful) adults."

}];


function myFunction() {
	var input= document.getElementById("cat").value;
 		
 		for(var i = 0; i < myArr.length; i++) {          
 			
 			if (input == myArr[i].sign) {
 				var image = document.getElementById("picture");
				image.src = myArr[i].img
				var title = document.getElementById("title")
				title.innerHTML = myArr[i].sign;
				var message = document.getElementById("paragraph")
				message.innerHTML = myArr[i].description;
				return;
				 }
 			
			}
}


