
const lessonSummaries = [
    "שיעור 1: תוכן השיעור הראשון כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור הראשון. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 2: תוכן השיעור השני כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השני. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 3: תוכן השיעור השלישי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השלישי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 4: תוכן השיעור הרביעי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור הרביעי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 5: תוכן השיעור החמישי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור החמישי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 6: תוכן השיעור השישי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השישי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 7: תוכן השיעור השביעי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השביעי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 8: תוכן השיעור השמיני כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור השמיני. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים.",
    "שיעור 9: תוכן השיעור התשיעי כאן יכול להיות תיאור ארוך מאוד על תוכן השיעור התשיעי. זה יכול לכלול פרטים רבים על החומר שנלמד, המטרות של השיעור, תהליכי הלמידה המשמעותיים, ועוד ועוד. בנוסף, ניתן להכליל בתיאור זה גם דוגמאות מעשיות, סיפורים, או כל תוכן אחר שמתאים למטרות השיעור. זה יכול להיות אורך מסוים או מתוכנן להיות די רחב וכולל פרטים מקיפים על הנושאים המטופלים."
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
        menu();
        page=1;
        }
    }, 2750);
};


const menu = (event) => {
    console.log("menu");
    document.getElementById('info-div').style.visibility = "hidden";
        document.body.style.overflow = "auto";
        document.getElementById('lesson-menu').style.visibility = "visible";
        document.getElementById('lesson-menu').style.display = "block";
        containers = document.querySelectorAll('.image-container');
    // Loop through each container
   for (var i = 0; i < containers.length; i++) {
 // Add event listener to each container
 containers[i].addEventListener('click', moveToLesson);
}  
};



// Define the function to be called on click
const moveToLesson = (event) => {
    document.getElementById('lesson-menu').style.display = "none";
    document.getElementById('info-div').style.visibility = "visible";
    document.getElementById('back_btn').addEventListener('click', menu);
    // For example, you can navigate to a different page or perform some action
    const containerId = event.target.closest('.image-container').id;
    // Find the index of the clicked container in the containers array
    const containerIndex = Array.from(containers).indexOf(event.target.closest('.image-container'));
    // Access the corresponding lesson summary from the array
    const lessonSummary = lessonSummaries[containerIndex - 1];
    // Log the ID and lesson summary of the clicked container
    console.log("Clicked container ID:", containerId);
    console.log("Lesson Summary:", lessonSummary);
    
};





