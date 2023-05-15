const db = require('./db')


async function queryAllData(){
    const sqlStatement = "SELECT UN.fdcid, UN.servingSize, UN.calories, UN.protein, UN.totalFat, UN.sugars, UN.vitaminD, UN.calcium, UN.iron, UN.potassium, UN.fiber, UN.sodium, UN.artificial,UN.houseHoldServing,UN.saturatedFat, UN.sweetener, UN.goodChoice, UN.tag, UI.description, UI.brand, UI.ingredients FROM usdaNutrientUpdated AS UN JOIN usdaInfoUpdated AS UI ON UN.fdcid = UI.fdcid limit 50 "
    const result = await db.query(sqlStatement);
    return result[0];
}

module.exports={
    queryAllData
}