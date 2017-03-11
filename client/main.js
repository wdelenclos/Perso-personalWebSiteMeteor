import{Template}from 'meteor/templating';import './main.html';if(location.protocol!='https:')
{location.href='https:'+window.location.href.substring(window.location.protocol.length)}
var today=new Date();var annee=today.getFullYear();(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-52460890-1','auto');ga('send','pageview');class TextScramble{constructor(el){this.el=el
    this.chars='!<>-_\\/[]{}—=+*^?#________'
    this.update=this.update.bind(this)}
    setText(newText){const oldText=this.el.innerText
        const length=Math.max(oldText.length,newText.length)
        const promise=new Promise((resolve)=>this.resolve=resolve)
        this.queue=[]
        for(let i=0;i<length;i++){const from=oldText[i]||''
            const to=newText[i]||''
            const start=Math.floor(Math.random()*40)
            const end=start+Math.floor(Math.random()*40)
            this.queue.push({from,to,start,end})}
        cancelAnimationFrame(this.frameRequest)
        this.frame=0
        this.update()
        return promise}
    update(){let output=''
        let complete=0
        for(let i=0,n=this.queue.length;i<n;i++){let{from,to,start,end,char}=this.queue[i]
            if(this.frame>=end){complete++
                output+=to}else if(this.frame>=start){if(!char||Math.random()<0.28){char=this.randomChar()
                this.queue[i].char=char}
                output+=`<span class="dud">${char}</span>`}else{output+=from}}
        this.el.innerHTML=output
        if(complete===this.queue.length){this.resolve()}else{this.frameRequest=requestAnimationFrame(this.update)
            this.frame++}}
    randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}
function storytellingLocate(position){function calculDistance(lat_a,lon_a,lat_b,lon_b){a=Math.PI/180;lat1=lat_a*a;lat2=lat_b*a;lon1=lon_a*a;lon2=lon_b*a;t1=Math.sin(lat1)*Math.sin(lat2);t2=Math.cos(lat1)*Math.cos(lat2);t3=Math.cos(lon1-lon2);t4=t2*t3;t5=t1+t4;rad_dist=Math.atan(-t5/Math.sqrt(-t5*t5+1))+2*Math.atan(1);return(rad_dist*3437.74677*1.1508)*1.6093470878864446}
    var maposition={"latitude":'48.875161',"longitude":'2.221950'}
    distance=calculDistance(position.coords.latitude,position.coords.longitude,maposition.latitude,maposition.longitude);distance=Math.round(distance);if(distance<25){var phrases=[distance+' km nous séparent en ce moment même','mais grầce à internet, nous faisons connaissance','Il met aussi en contact 28 milliards d\'appareils dans le monde,','des appareils qui connectent','transmettent & intéragissent','nous aident et apprennent de nous','le digital repense notre façon de voir le monde','il nous émerveille.'];var link="#apropos";var linkText="Découvrir"}
    else{var phrases=[distance+' km nous séparent','mais grầce à internet, nous faisons connaissance','Il met aussi en contact 28 milliards d\'appareils dans le monde,','des appareils qui connectent','transmettent & intéragissent','nous aident et apprennent de nous','le digital repense notre façon de voir le monde','il nous émerveille.'];var link="#apropos";var linkText="Découvrir"}
    document.querySelector('#storytellingLink').innerHTML="<a href=\""+link+"\" class=\"button big wide smooth-scroll-middle discoverBtn\">"+linkText+"</a>";$('.discoverBtn').hide();var el=document.querySelector('.text')
    var fx=new TextScramble(el)
    let counter=0
    var next=()=>{fx.setText(phrases[counter]).then(()=>{setTimeout(next,3000)})
        if(counter==2){$('.discoverBtn').fadeIn()}
        counter=(counter+1)%phrases.length}
    next()}
function storytellingUnlocate(){var phrases=['Avec 28 milliards d\'appareils dans le monde','28 milliards d\'appareils qui nous connectent','transmettent & intéragissent','nous aident et apprennent de nous','le digital repense notre façon de voir le monde','il nous émerveille.']
    var link="#apropos";var linkText="Découvrir";document.querySelector('#storytellingLink').innerHTML="<a href=\""+link+"\" class=\"button big wide smooth-scroll-middle discoverBtn\">"+linkText+"</a>";$('.discoverBtn').hide();var el=document.querySelector('.text')
    var fx=new TextScramble(el)
    let counter=0
    var next=()=>{fx.setText(phrases[counter]).then(()=>{setTimeout(next,3000)})
        if(counter==2){$('.discoverBtn').fadeIn()}
        counter=(counter+1)%phrases.length}
    next()}
$(window).load(function() {
    var today = new Date();
    var annee = today.getFullYear();
    console.log('© Wladimir Delenclos - ' + annee + '\n \n- Github: https://github.com/wdelenclos/Projet.Perso \n \n  \\\\°');
    $('.discoverBtn').hide();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(storytellingLocate, storytellingUnlocate)
    }
});
Meteor.call("titre", function(irr, res) {});
Template.portrait.helpers({
    h2: "A propos",
    subtitle: "Heticien - UX Designer @DigitasLBi",
    p1: "Concevoir et réaliser des expériences sur les supports digitaux suppose aussi bien un expertise approfondie, qu'une vision d'ensemble des domaines qui composent le monde digital.",
    p2: "Heticien en Bachelor Chef de projet Multimédia (promotion 2018) et UX Designer chez DigitasLBi, j'approfondis mes connaissances en conception d'expérience utilisateur par des recherches sur le no-interface Design et les microinteractions.",
    p3: "Ces recherches et connaissances théoriques se rejoignent dans un savoir-faire technique; aussi bien créatif (aquis en classe préparatoire pour les arts décoratifs) que du développement (NodeJS, Meteor, PHP ...) qui me permettent de passer par moi même mes idées en produits finaux.",
    aTitle: "Voir mon profil LinkedIn",
    a: "https://www.linkedin.com/in/wdelenclos",
    img: "images/profil.jpg",
    alt: "Portrait de Wladimir Delenclos",
    id: "apropos"
});
Template.publications.helpers({
    h2: "Dernières publications",
    p: "Découvrez mes derniers articles publiés sur Medium",
});
Template.gallerie.helpers({
    h2: "Réalisations",
    p: "Parcourez certains de mes projets et clients",
});
Template.footer.helpers({
    credits: "Wladimir Delenclos - " + annee,
    username: "wdelenclos",
});
Template.background.helpers({
    imageId: function() {
        min = Math.ceil(1);
        max = Math.floor(6);
        return Math.floor(Math.random() * (max - min)) + min
    }
});
Meteor.call("publication", function(err, res) {
    Meteor.call("publicationTitle", function(irr, ras) {
        for (var i = 0; i < res.length; i++) {
            var titre = ras.items[i].title;
            document.querySelector('#publications').innerHTML += "<article id=\"publication" + i + "\"><a href=\"" + res[i].url + "\" target='_blank' class=\"image\"> <img src=\"" + res[i].image + "\" alt=\"" + titre + "\" /> </a> <div class=\"caption\"> <h3>" + titre + "</h3> <p>" + res[i].time + "</p> <ul class=\"actions\"> <li><span class=\"button small\">Lire</span></li> </ul> </div> </article>"
        }
    })
});
Meteor.call("gallerie", function(err, res) {
    let projects = res.projects;
    console.log(projects);
    let titre;
    let url;
    let imgurl;
    let p;
    for (let i = 0; i < projects.length; i++) {
            titre = projects[i].name;
            url = projects[i].url;
            imgurl = projects[i].covers[404];
            p = projects[i].stats.views;
            document.querySelector('#gallerie').innerHTML += "<article><a href=\"" + url + "\" target=\"_blank\" class=\"image\"> <img src=\"" + imgurl + "\" alt=\"" + titre + "\"> </a> <div class=\"caption\"> <h3>" + titre + "</h3> <p>" + p + " vues.</p> <ul class=\"actions\"> <li><span class=\"button small\">Voir sur Behance</span></li> </ul> </div> </article>"

    }
});
Template.storytelling.events({
    'click #firstBtn': function() {
        console.log('ok')
    },
})
