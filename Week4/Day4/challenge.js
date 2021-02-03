class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(this.uploader + ' watched all ' + this.time + ' of ' + this.title + '!')
    }
}

let movie1 = new Video('All together now', 'Paul', 360);
movie1.watch();
let movie2 = new Video('Hard days night', 'Ringo', 300);
movie2.watch();

let arr = [
    {
        details: {
            title: 'Let it be',
            uploader: 'John',
            time: 330
        }
    },
    {
        details: {
            title: 'Yesterday',
            uploader: 'George',
            time: 390
        }
    },
    {
        details: {
            title: 'Help!',
            uploader: 'Paul',
            time: 360
        }
    },
    {
        details: {
            title: 'Birthday',
            uploader: 'John',
            time: 330
        }
    },
    {
        details: {
            title: 'Michelle',
            uploader: 'Brayan',
            time: 320
        }
    }
];

let arrObjects = [];
for (let i = 0; i < arr.length; i++){
    arrObjects.push(new Video(arr[i].details.title, arr[i].details.uploader, arr[i].details.time));
    arrObjects[i].watch();
}