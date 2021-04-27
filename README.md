<div align="center" id="top"> 
  <img src="./images/Chart.jpg" alt="PivotRSI" />

  &#xa0;

  <!-- <a href="https://pivotrsi.netlify.app">Demo</a> -->
</div>

<h1 align="center">Pivot RSI</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/TechRancher/pivot_rsi?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/TechRancher/pivot_rsi?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/TechRancher/pivot_rsi?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/TechRancher/pivot_rsi?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/github.com&#x2F;TechRancher/pivotrsi?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/github.com&#x2F;TechRancher/pivotrsi?color=56BEB8" /> -->

  <img alt="Github stars" src="https://img.shields.io/github/stars/TechRancher/pivot_rsi?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  PivotRSI 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#gear-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#hammer_and_wrench-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#runner-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#chart_with_upwards_trend-usage">Usage</a> &#xa0; | &#xa0;
  <a href="#scroll-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/github.com&#x2F;TechRancher" target="_blank">Author</a>
</p>

<br>

## :gear: About ##

**Disclaimer:** _In order to demonstrate the functionality of my script, I used actual ticker symbols in the chart images. However, I do not make recommendations or determine the suitability of any security or strategy for individual traders. Any investment decision you make in your self-directed account is solely your responsibility. Be sure to backtest any strategy to determine if you understand the risks involved with each strategy._  

This is like the StochRSI script, But I had changed somethings in order for it to work with a strategy I call "Pivot On EMA", _use this link to learn more about this strategy: [PivotOnEMA](https://www.github.com/TechRancher/PivotOnEMA/)_, which will help indicate when to buy or sell.

## :sparkles: Features ##

:heavy_check_mark: Indicates Overbought;\
:heavy_check_mark: Indicates Oversold;\
:heavy_check_mark: Could be used to give buy or sell signals;

## :hammer_and_wrench: Requirements ##

- [PivotRSI](http://tos.mx/vyB3CWp)


## :runner: Starting ##  

Before starting :exclamation:, you need to have [ThinkorSwim Platform](https://tdameritrade.com/tools-and-platforms.page) installed.  

You also need to have the requirements list downloaded.

## :chart_with_upwards_trend: Usage ##  

After installing the script. You can navigate to Charts tab. And choose Pivot_RSI in the chart studies.  As you can see from the image below:  
![Chart Window](images/Chart.jpg)  
This is what it will look like.  Two color lines that wiggle up and down with a colored section in the middle from 25 to 80.  The way how this works is the wiggly color lines represent the movement of price up or down. From 25 to 0 represents that the stock could be oversold based off the time that you can set in the customization options.  From 80 to 100 represents that the stock could be overbought based off the same time frame as oversold. Default for Oversold and Overbought are set at 14 under rsi length.  25 and 80 can not be changed without changing the script.  

This can be used two ways: Give a Buy Long Signal or Sell Short Signal.  
I will walk you through how to recognize when to buy long and when to sell short.  

### How To Use For Buy Long ###  

When both the colored wiggle lines go below the 25 and then start going back up, this would be your buy long signal.  Image below shows arrows to indicate buy signals.  
![Buy_RSI](images/Buy_Signal_RSI.jpg)  
As you can see the arrows are pointing to the point right when the colored wiggle lines start moving up.  This would be your buy long signal.  

### How To Use For Sell Short ###  

When both the colored wiggle lines go above the 80 and then start going back down, this would be your sell short signal.  Image below shows arrows to indicate sell short signal.  
![Sell_RSI](images/Sell_Signal_RSI.jpg)  
As you can see the arrows are pointing to the point right when the colored wiggle lines start moving down.  This would be your sell short signal.  

### Conclusion ###  

Using just this Pivot RSI alone will help you with finding entries but I would suggest you do your back testing on this before using it live with your hard earned money.  I use this with my [Pivot On EMA Strategy](https://www.github.com/TechRancher/PivotOnEMA/) to achieve higher win results.  

## :scroll: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/github.com&#x2F;TechRancher" target="_blank">J Sikes</a>

&#xa0;

<a href="#top">Back to top</a>
=======
