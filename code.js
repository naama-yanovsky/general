const lessonSummaries = [
    "שיעור 1: תוכן השיעור הראשון כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור הראשון. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 2: תוכן השיעור השני כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השני. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 3: תוכן השיעור השלישי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השלישי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 4: תוכן השיעור הרביעי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור הרביעי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 5: תוכן השיעור החמישי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור החמישי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 6: תוכן השיעור השישי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השישי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 7: תוכן השיעור השביעי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השביעי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 8: תוכן השיעור השמיני כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השמיני. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 9: יעודו של פיקוד העורף הוא חיזוק החוסן הלאומי והצלת חיים. הפיקוד עושה זאת על ידי הכנת המרחב האזרחי טרם עימות, תמיכה במרחב האזרחי בעת עימות תוך ביצוע פעולות חילוץ והצלה באירועי תקיפת העורף, וסיוע לשיקומו המהיר של המרחב האזרחי אחר הסתיים עימות. פיקוד העורף מפרסם הנחיות שוטפות להתגוננות אזרחית, במיוחד בעתות חירום, ומפעיל מוקד חירום טלפוני שמספרו 104. ייעוד הפיקוד ותפקידיו מגולמים בחוק הג\"א (1951), ובשורה ארוכה של תקנות והחלטות ממשלה נוספות. פיקוד העורף הוא גוף צבאי, המשמש הלכה ולמעשה כשלוש ישויות ארגוניות: הראשונה- שירות התגוננות אזרחית, בכפיפות ישירה לשר הביטחון, וכהגדרתו בחוק הג\"א. השנייה- פיקוד מרחבי, כהגדרתו בהוראות הפיקוד העליון: הפיקוד המרחבי. והשלישית- קצין חיל ראשי וסמכות מקצועית צה\"לית בנושא ההתגוננות האזרחית, החילוץ, האב\"ך בעורף האזרחי, מיגון, חומרים מסוכנים והצלה בעורף. בנוסף לכך משמש מפקד פיקוד העורף קצין מטה מקצועי במטה הכללי. מבחינה תפקודית משלב פיקוד העורף בייעודו הן הפעלת כוח, הן בניין הכוח והן הכנת המרחב האזרחי לחירום.",
];

var containers;
let page =0;

// Loading function
window.addEventListener('load', function() {
    document.getElementById('full-screen').addEventListener('click', handleAnimation);
});



// Initial animation function
const handleAnimation = (parameters) => {
    var hand = document.getElementById('hand');
    hand.style.display = 'none';

    // The logos animations
    var logo = document.getElementById('logo');
    logo.style.animation = 'ani 4s ';
    var logo2 = document.getElementById('logo2');
    logo2.style.animation = 'ani 4s ';
    var heading = document.getElementById('heading');
    heading.style.animation = 'ani 4s ';
     
    setTimeout(function() {
        if(page==0){
        logo.style.display = 'none';
        logo2.style.display = 'none';
        heading.style.display = 'none'; 
        document.body.style.overflow = "auto";
        menu();
        page=1;
        }
    }, 2750);
};


const menu = (event) => {
    console.log("Entering menu function...");
    document.getElementById('class-screen').style.visibility = "hidden";
    document.getElementById('lesson-menu').style.visibility = "visible";
    document.getElementById('lesson-menu').style.display = "block";
    containers = document.querySelectorAll('.image-container');
    // Loop through each container
    for (var i = 1; i < containers.length; i++) {
        // Add event listener to each container
        containers[i].addEventListener('click', moveToLesson);
    }  
};




// Define the function to be called on click
const moveToLesson = (event) => {
    document.getElementById('lesson-menu').style.display = "none";
    document.getElementById('class-screen').style.visibility = "visible";
    document.getElementById('back_btn').addEventListener('click', menu);

    // For example, you can navigate to a different page or perform some action
    const containerId = event.target.closest('.image-container').id;
    const lessonNumber = parseInt(containerId.slice(16)); // Assuming the containerId starts with 'image-container-' and the lesson number comes after it
    // Set the inner text to 'שיעור' followed by the lesson number
    console.log(lessonNumber);
    document.getElementById('image-text').innerText = ' שיעור ' + lessonNumber;
    // Find the index of the clicked container in the containers array
    const containerIndex = Array.from(containers).indexOf(event.target.closest('.image-container'));
    // Access the corresponding lesson summary from the array
    const lessonSummary = lessonSummaries[containerIndex - 1];
    console.log("Clicked container ID:", containerId);
    console.log("Lesson Summary:", lessonSummary);
    document.getElementById('info-div').innerText =  lessonSummary;

};





