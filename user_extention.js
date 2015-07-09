Selenium.prototype.doWaitAndClick = function(locator, timeout) {
    /**
   * First, Wait to find the element (specified by locator).
   * Finally, clicks on it (a link, button, checkbox or radio button)
   *
   * @param locator an <a href="#locators">element locator</a>
   * @param timeout Optional - a timeout in milliseconds, after which the action will return with an error.
    *                If this value is not specified, the default Selenium
    *                timeout will be used. See the setTimeout() command.
   */

	if (! timeout) {
        timeout = this.defaultTimeout;
    }
  	
  	return Selenium.decorateFunctionWithTimeout(function() {
	    find = selenium.isElementPresent(locator);
	    if (find) {
	    	LOG.info(location + ' has been found...');
	    	selenium.doClick(locator);
	    	LOG.info(location + ' has been clicked...');
	    }
	    return find;
	}, timeout);

}

Selenium.prototype.doWaitAndType = function(locator, text) {
    /**
   * First, Wait to find the element (specified by locator).
   * Finally, type the text inside the element found
   *
   * @param locator an <a href="#locators">element locator</a>
   * @param text text to type in the element identified by locator.
   */  		
  	return Selenium.decorateFunctionWithTimeout(function() {
	    find = selenium.isElementPresent(locator);
	    if (find) {
	    	LOG.info(location + ' has been found...');
	    	selenium.doType(locator, text);
	    	LOG.info(text + ' has been typed...');
	    }
	    return find;
	}, this.defaultTimeout);
}

// Selenium.prototype.doWaitingReqs = function(timeout) {
//   if (! timeout) {
//     timeout = this.defaultTimeout;
//   }
//   return Selenium.decorateFunctionWithTimeout(function() {
//     var testWindow = selenium.browserbot.getCurrentWindow();
//     if (testWindow.jQuery.active == 0) {
//       return true;
//     }
//     return false;
//   }, timeout);
// }