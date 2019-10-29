/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Feeds are defined', function() {
            //these expectations are to ensuer that all feeds are defined and not empty.
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures   defined
         * and that the URL is not empty.
         */
        it('URL is defined', function() {
            //these expectations are to ensuer that all feeds have URLs and not empty.
            for (let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name is defined', function() {
            //these expectations are to ensuer that all feeds have names and not empty.
            for (let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('The menu is hidden by default', function() {
            //this expectation is to ensuer that the menu has this class which makes it hidden by default.
            expect(document.body).toHaveClass('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('Ensures the menu changes visibility', function() {
            // to catch the menu icon.
            let menuList = document.querySelector('a.menu-icon-link');
            // once menu is clicked.
            menuList.click();
            // menu will be shown on screen.
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            menuList.click();
            // when clicked again, the menu will disapper.
            expect(document.body.classList.contains('menu-hidden')).toBe(true);

        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('There is at least a single element within the feed container', function() {
            // after loading loadfeed function, container is checked for containing at least one entry.
            let feeds = document.querySelector('div.feed');
            let entries = feeds.querySelectorAll('article.entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         let first;
         let seconed;
         // compare fist content feed to second feed to ensure change.
         beforeEach(function(done) {
            loadFeed(0, function() {
                first = document.querySelector('.feed').children[0].text;
                loadFeed(1, function() {
                seconed = document.querySelector('.feed').children[1].text;
                done();
                });
            });
         });

         it('New feed is loaded', function() {
            expect(first).not.toBe(seconed);
        });
    });
}());
