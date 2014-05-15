//  Expressions Industry

/*  While I currently work at a coffee shop, my family owns and runs a fairly
    large garden center operation where we grow about 80% of all the plant
    material we sell to the public.  Being an occasional worker helping in the
    back production, one of the many tasks we need to do is mix up a solution of
    fertilizer concentrate which gets injected into the watering system.  This
    small script will ask how strong the solution should be, how many gallons will
    need to be made, and what setting the fertilizer injector will be on.  All
    of this will pop out a weight amount of fertilizer needed to add to the stock
    tank.
 */

/*
    After some internet research the formula for this calculation is as follows:

    1 volume of stock solution = (desired conc in ppm * dilution factor)
                                    / % of element in fertilizer * C

    C is the conversion constant of 75 (Ounces per US gallon)

    Dilution factor is the injector ratio
 */

// Set up variables needed

const c = 75;
var ppm = prompt("What is the desired ppm?");
var ratio = prompt("What is your injector ratio set to?");
var tankSize = prompt("How many gallons in the tank?");

var perGallon = ( ppm * ratio ) / ( 20 * c );
var finalWeight = perGallon * tankSize;

console.log("To get " +ppm+ "ppm fertilizer for a " +tankSize+ "gal tank and a 1:" +ratio+ " ratio setting "
             + "please weigh out " +finalWeight+ "oz of fertilizer and fill to " +tankSize+ "gal with water"
             + " This is " +perGallon+ "oz of fertilizer per gallon of water used.");
