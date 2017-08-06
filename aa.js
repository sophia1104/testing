// 1.安装 模块
/**
 * 1 chromedriver 命令行模式下执行
 *   npm install chromedriver --save
 * 2 selenium-webdriver
 *   npm install selenium-webdriver --save
 * 
 */

require('chromedriver');
var webdriver = require('selenium-webdriver');
var By=webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();//创建一个

driver.get("http://www.baidu.com");  //打开百度首页
driver.findElement(By.id('kw')).sendKeys('test');
driver.findElement({id:'su'}).click();