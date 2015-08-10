var React 		= require('react/addons');
var Root 			= require('../../app/components/root');
var expect 		= require('expect')
var TestUtils = React.addons.TestUtils;

describe('Root', function() {

	describe('renderIntoDocument', function(){

		it("should render the component and its html into a dom node", function(){
			var root = TestUtils.renderIntoDocument(<Root/>)
			expect(root.getDOMNode().textContent).toContain("AHOY!");
		})

	})

});