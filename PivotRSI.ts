#
# Pivot RSI
# Author: TechRancher
# Date: 04/2021
# Follow me at Git Hub:
# https://www.github.com/TechRancher
# This Relative Strength Index (RSI) is used
# with a Strategy I call "Pivot On EMA"
# You can learn more about this strategy at:
# https://www.github.com/TechRancher/PivotOnEMA/
#

declare lower;

# User Inputs
#hint RSI_length: The number of bars with which the RSI is calculated.
#hint RSI_average_type: The type of moving average to be used in the calculation of the RSI: Simple, Exponential, Weighted, Wilder's, or Hull.
#hint RSI_price: The type of price with which the RSI is calculated.
#hint KPeriod: The period on which the highest and the lowest price values are to be found.
#hint DPeriod: The length of the moving average to be applied to FullK. This produces the FullD plot.
#hint slowing_period: The length of the moving average to be applied to %k. This produces the FullK plot.
#hint averageType: The type of moving average to be used in calculations: Simple, Exponential, Weighted, Wilder's, or Hull.
input RSI_length = 14;
input RSI_average_type = AverageType.WILDERS;
input RSI_price = close;
input KPeriod = 14;
input DPeriod = 3;
input slowing_period = 1;
input averageType = AverageType.SIMPLE;

# Define Variables 
def RSI = RSI(price = RSI_price, length = RSI_length, averageType = RSI_average_type);
def over_bought = 80; # I have set this as non-adjustable for the Pivot Strategy RSI.
def over_sold = 20; # I have set this as non-adjustable for the Pivot Strategy RSI.

# Plot Definitions
plot FullK = StochasticFull(over_bought, over_sold, KPeriod, DPeriod, RSI, RSI, RSI, slowing_period, averageType).FullK;
plot FullD = StochasticFull(over_bought, over_sold, KPeriod, DPeriod, RSI, RSI, RSI, slowing_period, averageType).FullD;
plot OverBought = over_bought;
plot OverSold = over_sold;

# Added background color to plot
AddCloud(OverSold, OverBought, CreateColor(0, 219, 104), CreateColor(255, 143, 87), yes);

# Set Color for Plot
FullK.SetDefaultColor(CreateColor(3, 255, 50));
FullD.SetDefaultColor(CreateColor(255, 0, 180));
OverBought.SetDefaultColor(CreateColor(245, 96, 0));
OverSold.SetDefaultColor(CreateColor(0, 72, 247));
