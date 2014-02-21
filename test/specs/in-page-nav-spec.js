function inPageNavSpec(hash, tabs) {

    var describeSpec = 'Responsive tabs';

    var fixtures = {
        'demo-inpage-nav-tabs': document.getElementById('demo-inpage-nav-tabs').outerHTML
    };

    addScript('components','in-page-nav','sleek-nav');

    describe(describeSpec, function () {

        it('change tab look when changing tabs', function () {
            $('#first-tab').click();
            expect($('#first-tab').hasClass('selected')).to.equal(true);
            expect($('#fourth-tab').hasClass('selected')).to.equal(false);
            $('#fourth-tab').click();
            expect($('#fourth-tab').hasClass('selected')).to.equal(true);
            expect($('#first-tab').hasClass('selected')).to.equal(false);
        });
        it('will only have one tab selected at a time', function () {
            $('#first-tab').click();
            expect($('#demo-inpage-nav-tabs .tab.selected').length).to.equal(1);
            $('#fourth-tab').click();
            expect($('#demo-inpage-nav-tabs .tab.selected').length).to.equal(1);
        });

        describe('Whole Page Navigation', function() {
            it('change tab look when changing tabs', function () {
                $('#whole-page-first-tab').click();
                expect($('#first-tab').hasClass('selected')).to.equal(true);
                expect($('#fourth-tab').hasClass('selected')).to.equal(false);
                $('#whole-page-fourth-tab').click();
                expect($('#fourth-tab').hasClass('selected')).to.equal(true);
                expect($('#first-tab').hasClass('selected')).to.equal(false);
            });
            it('will only have one tab selected at a time', function () {
                $('#whole-page-first-tab').click();
                expect($('#demo-inpage-nav-tabs .tab.selected').length).to.equal(1);
                $('#whole-page-fourth-tab').click();
                expect($('#demo-inpage-nav-tabs .tab.selected').length).to.equal(1);
                expect(window.location.href.indexOf('#!whole-page-fourth-tab')).to.be.true;
            });
        });
    });

    return describeSpec;
}

if (window.define) {
    define('specs/in-page-nav-spec', ['utils/hash-manager', 'components/in-page-nav'],
        function (hash, tabs) {
            return inPageNavSpec(hash, tabs);
        }
    );
}