import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
    projects = [
        {title: "Settles of Natac", tech: "Django and Python", techVar: "python", summary: "A web application clone of the popular board game \"Settlers of Catan.\" This project utilizes resource management, player turn mechanics, and game variables. JQuery and Ajax were used to make real time updates to the board state.", url: "", imageUrl: "../../assets/img/SettlesOfNatac/Board.PNG", images: [{id: 0, url: "../../assets/img/SettlesOfNatac/Board.PNG"}, {id: 1, url: "../../assets/img/SettlesOfNatac/Trade.PNG"}]},
        {title: "Crime Mapper", tech: "MEAN", techVar: "MEAN", summary: "A civic-minded project that seeks to broadcast crime information and statistics to an informed public. Google Maps API was used to map crimes by location and Charts.js was used to display various user-friendly statistics.", url: "", imageUrl: "../../assets/img/CrimeMapper/LandingPage.PNG", images: [{ id: 0, url: "../../assets/img/CrimeMapper/LandingPage.PNG"}, { id: 1, url: "../../assets/img/CrimeMapper/Data.PNG"}, { id: 2, url: "../../assets/img/CrimeMapper/Graph.PNG"}, { id: 3, url: "../../assets/img/CrimeMapper/Report.PNG"}]},
        {title: "Train Tracker", tech: "C# and ASP.Net", techVar: "cSharp", summary: "Utilizes the Chicago Transportation Authority's API to display train locations and arrival times. Google Maps API was used to display train information.", url: "http://13.59.190.109", imageUrl: "../../assets/img/TrainTracker/Dashboard.PNG", images: [{ id: 0, url: "../../assets/img/TrainTracker/Dashboard.PNG"}, {id: 1, url: "../../assets/img/TrainTracker/LandingPage.PNG"}, {id: 2, url: "../../assets/img/TrainTracker/Tip.PNG"}]},
        {title: "GigBook", tech: "Angular and C#/ASP.Net", techVar: "cSharp", summary: "An ECommerce web application for hiring musicians. Utilizes a negotiation system between clients and musicians. Stripe API was used for transactions", url: "", imageUrl: "../../assets/img/GigBook/LandingPage.PNG", images: [{id: 0, url: "../../assets/img/GigBook/LandingPage.PNG"}, {id: 1, url: "../../assets/img/GigBook/Registration.PNG"}, {id: 2, url: "../../assets/img/GigBook/Search.PNG"}, {id: 3, url: "../../assets/img/GigBook/Payment.PNG"}]}
    ];
    showProjects = [];

    miniProjects = [
        {code: "<p data-height=\"332\" data-theme-id=\"0\" data-slug-hash=\"WgqXBX\" data-default-tab=\"css,result\" data-user=\"mericleac\" data-pen-title=\"JS Clock\" data-preview=\"true\" class=\"codepen\">See the Pen <a href=\"https://codepen.io/mericleac/pen/WgqXBX/\">JS Clock</a> by Mandy Mericle (<a href=\"https://codepen.io/mericleac\">@mericleac</a>) on <a href=\"https://codepen.io\">CodePen</a>.</p><script async src=\"https://static.codepen.io/assets/embed/ei.js\"></script>", tech: "js"}
    ];
    showMini = [];
    selectedProject: any;

    constructor() { }

    ngOnInit() {
        this.selectedProject = null;
        this.showProjects = this.projects;
        this.showMini = this.miniProjects;
    }

    filterProjects(str) {
        this.showProjects = [];
        if (str == "all") {
            this.showProjects = this.projects;
            return;
        }
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].techVar === str) {
                this.showProjects.push(this.projects[i]);
            }
        }
    }

    filterMini(str) {
        this.showMini = [];
        for (let i = 0; i < this.miniProjects.length; i++) {
            if (this.miniProjects[i].tech === str) {
                this.showMini.push(this.miniProjects[i]);
            }
        }
    }

    selectProject(project) {
        this.selectedProject = project;
    }

    removeModal() {
        this.selectedProject = null;
    }
}
