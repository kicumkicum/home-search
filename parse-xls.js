const xlsx = require('node-xlsx').default;
const fs = require('fs');
const Url = `https://spb.cian.ru/cat.php?currency=2&deal_type=sale&engine_version=2&in_polygon[1]=29.5202_60.3228%2C29.5752_60.3215%2C29.6232_60.3181%2C29.7056_60.3126%2C29.7812_60.3126%2C29.8361_60.3126%2C29.8841_60.3147%2C29.9871_60.3194%2C30.038_60.3194%2C30.0901_60.3215%2C30.1341_60.3215%2C30.189_60.3228%2C30.2618_60.3228%2C30.3099_60.3249%2C30.3717_60.3249%2C30.4197_60.3262%2C30.4774_60.3283%2C30.5296_60.3283%2C30.5777_60.3317%2C30.6216_60.333%2C30.6669_60.3317%2C30.7109_60.3296%2C30.7521_60.3283%2C30.7974_60.3262%2C30.8413_60.3283%2C30.8867_60.3283%2C30.9306_60.3249%2C30.9787_60.3228%2C31.024_60.316%2C31.0679_60.3092%2C31.1132_60.3078%2C31.1572_60.3078%2C31.1641_60.284%2C31.1709_60.2635%2C31.1778_60.241%2C31.1847_60.2205%2C31.1915_60.1986%2C31.1915_60.1761%2C31.1778_60.1521%2C31.1778_60.1247%2C31.1819_60.1028%2C31.1847_60.0802%2C31.1847_60.0493%2C31.1847_60.0238%2C31.1847_60.0012%2C31.1778_59.9791%2C31.1709_59.9564%2C31.1709_59.9289%2C31.1682_59.9047%2C31.1641_59.8826%2C31.1613_59.8619%2C31.1572_59.8412%2C31.1544_59.8149%2C31.1503_59.7928%2C31.1476_59.772%2C31.1435_59.7478%2C31.1407_59.7249%2C31.1338_59.7027%2C31.1297_59.6798%2C31.1297_59.6575%2C31.1297_59.6297%2C31.127_59.6068%2C31.1229_59.5859%2C31.116_59.5636%2C31.1091_59.5427%2C31.1091_59.5197%2C31.0679_59.5078%2C31.0171_59.5043%2C30.9553_59.5057%2C30.9031_59.5078%2C30.8592_59.5078%2C30.8043_59.5078%2C30.7631_59.5057%2C30.7109_59.5057%2C30.6669_59.5078%2C30.6257_59.5092%2C30.5804_59.5148%2C30.5255_59.5232%2C30.4774_59.5232%2C30.4266_59.5148%2C30.3854_59.5127%2C30.3373_59.5148%2C30.2893_59.5148%2C30.2412_59.5113%2C30.1959_59.5127%2C30.1519_59.5127%2C30.1066_59.5127%2C30.0654_59.5148%2C30.0242_59.5197%2C29.9762_59.5252%2C29.9322_59.5232%2C29.88_59.5197%2C29.8114_59.5232%2C29.7674_59.5232%2C29.7221_59.5266%2C29.6809_59.5322%2C29.637_59.5392%2C29.5958_59.5427%2C29.5546_59.5441%2C29.5161_59.5545%2C29.5161_59.5894%2C29.5161_59.6137%2C29.5161_59.6367%2C29.5161_59.661%2C29.523_59.6819%2C29.5298_59.7096%2C29.5408_59.7408%2C29.5408_59.763%2C29.5408_59.7872%2C29.5367_59.8115%2C29.5202_59.8357%2C29.5271_59.8564%2C29.523_59.8806%2C29.5134_59.9033%2C29.5065_59.9309%2C29.5092_59.9516%2C29.523_59.9736%2C29.523_59.9998%2C29.523_60.0252%2C29.5408_60.0493%2C29.5546_60.0699%2C29.5614_60.0973%2C29.5573_60.1302%2C29.5477_60.1658%2C29.5436_60.1918%2C29.5408_60.2123%2C29.5408_60.2362%2C29.5202_60.2649%2C29.5161_60.2874%2C29.5271_60.3078&maxprice=4000000&object_type[0]=1&offer_type=suburban&polygon_name[1]=Область+поиска`;


const workSheetsFromFile = xlsx.parse(`${__dirname}/offers.xlsx`);
console.log(workSheetsFromFile[0].data[0])
console.log(workSheetsFromFile[0].data[1])