// left to right
/*const a= document.querySelectorAll('.slider');
var counter=0;
const totalSlider = a.length;

a.forEach(
    (slider,index) =>
    {
        slider.style.left= `${index *100}%`
    }
)

const prev = () =>
{
    counter--
    if(counter < 0){
        counter = totalSlider - 1;
    }
    sliderrun()
}
const nxt = () =>
{
    counter++
    if (counter == totalSlider){
        counter = 0;
    }
    sliderrun()
}

const sliderrun=()=>
{
    a.forEach(
        (slider)=>
        {
            slider.style.transform = `translateX(-${counter * 100}%)`
        });
}*/

/*top to bottom*/
const a = document.querySelectorAll('.slider');
var counter = 0;
const totalSlides = a.length;


a.forEach((slider, index) => {
    slider.style.top = `${index * 100}%`;
});

const prev = () => {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1;
    }
    sliderrun();
};

const nxt = () => {
    counter++;
    if (counter === totalSlides) {
        counter = 0;
    }
    sliderrun();
};

const sliderrun = () => {
    a.forEach((slider) => {
        slider.style.transform = `translateY(-${counter * 100}%)`; 
    });
};
