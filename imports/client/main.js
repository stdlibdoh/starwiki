import { Accounts } from "meteor/accounts-base";
import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

// routing

Router.configure({
    layoutTemplate: 'MainLayout', 
    defaultBreadcrumbTitle: 'My Default Title',
    defaultBreadcrumbLastLink: false
});

Router.route('/', {
    name: 'home',
    template: 'welcome',
    title: 'Home'
});

Router.route('/about', {
    name: 'home.about',
    template: 'about',
    parent: 'home',
    title: 'About',
});

Router.route('/races', {
    name: 'home.races',
    template: 'races',
    parent: 'home',
    title: 'Races',
    data: function() {
        Session.set('race-filter', null);
    }
});

Router.route('/structures', {
    name: 'home.structures',
    template: 'structures',
    parent: 'home',
    title: 'Structures'
});

Router.route('/units', {
    name: 'home.units',
    template: 'units',
    parent: 'home',
    title: 'Units'
});

Router.route('/units/:title', {
    name: 'home.units.:title',
    template: 'article',
    parent: 'home.units',
    title: ':title',
    data: function() {
        return Articles.findOne({category2: 'Units', title: this.params.title});
    }
});

Router.route('/structures/:title', {
    name: 'home.structures.:title',
    template: 'article',
    parent: 'home.structures',
    title: ':title',
    data: function() {
            return Articles.findOne({category2: 'Structures', title: this.params.title});
    }
});

// accounts config

Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

// template helpers

Template.races.helpers({
    races: function() {
        return Articles.find({category1: 'races'}, {sort:{title: 1}});
    },
    racePick: function() {
        if (Session.get('race-filter')) {
            return true;
        }
        else return false;
    }
});

Template.structures.helpers( {
    structures: function() {
        if (Session.get('structure-filter')) {
            return Articles.find({category2: 'Structures', category1: Session.get('structure-filter')}, {sort:{title: 1}});
        }
        else {
            return Articles.find({category2: 'Structures'}, {sort:{category1: 1, title: 1}});
        }
}});

Template.units.helpers( {
    units: function() {
        if (Session.get('unit-filter')) {
            return Articles.find({category2: 'Units', category1: Session.get('unit-filter')}, {sort:{title: 1}});
        }
        else {
            return Articles.find({category2: 'Units'}, {sort:{category1: 1, title: 1}});
        }
    }
});

Template.navbar.helpers( {
    checkLogInStatus: function() {
        if(Meteor.user()) {
            $('.add-article-button').removeClass('disabled');
            return true;
        }
        else {
            $('.add-article-button').addClass('disabled');
            return true;
        }
    },
    settings: function () {
        return {
            position: 'bottom',
            limit: 3,
            rules: [
                {
                    token: '',
                    collection: Articles,
                    field: 'title',
                    template: Template.searchQuery
                }
            ]
        }
    }
});


Template.navbar.onRendered(function () {
    if(Meteor.user()) {
        $('.add-article-button').removeClass('disabled');
    }
    else {
        $('.add-article-button').addClass('disabled');
    }
});

// event helpers

Template.races.events( {
    'click .racePick': function (event) {
        Session.set('race-filter', $(event.target).text());
        var img_src = '/'+Session.get('race-filter')+'_background.gif';
        console.log(img_src);
        $('.raceButton').attr('src', img_src);
        console.log($('.raceButton').attr('src'));
    },
    'click .raceDecision': function (event) {
        Session.set('structure-filter', Session.get('race-filter'));
        Session.set('unit-filter', Session.get('race-filter'));

    }
});

Template.structures.events( {
    'click .js-set-filter': function(event) {
        Session.set('structure-filter', event.target.outerText);
    },
    'click .js-unset-filter': function(event) {
        Session.set('structure-filter', undefined);
    }
});

Template.units.events( {
    'click .js-set-filter': function (event) {
        Session.set('unit-filter', event.target.outerText);
    },
    'click .js-unset-filter': function (event) {
        Session.set('unit-filter', undefined);
    }
});

Template.navbar.events( {
    'click .add-article': function (event) {
        if(Meteor.user())
        {
            $('#add-article-form').modal('show');
        }        
    },
    'click .random-article': function () {
        var randomArticle = Math.floor(Math.random() * Articles.find().count());
        var targetArticle = Articles.findOne({}, { skip: randomArticle });
        while(!targetArticle.category2)
        {
            randomArticle = Math.floor(Math.random() * Articles.find().count());
            targetArticle = Articles.findOne({}, { skip: randomArticle });
        }
        var targetURL = '/'+targetArticle.category2 + '/' + targetArticle.title;
        $('.random-article').attr('href', targetURL);
    }
});

Template.add_article.events({
    'submit .js-add-article': function(event) {
        var title, img_src, img_alt, descript, category1, category2;
        title = event.target[0].value;
        descript = event.target[1].value;
        img_src = event.target[2].value;
        img_alt = event.target[3].value;
        category1 = event.target[4].value;
        category2 = event.target[5].value;
        Articles.insert( {
            title: title,
            img_src:img_src,
            img_alt:img_alt,
            descript: descript,
            category1: category1,
            category2: category2
        });
        $("#add-article-form").modal('hide');
        return false;
    }
});

Template.searchQuery.events({
    'click .js-search-autocomplete': function (event) {
        return Articles.findOne({ _id: event._id });
    }
});