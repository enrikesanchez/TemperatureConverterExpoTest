import { TemperatureVO } from '../../valueobjects/TemperatureVO';
import TemperatureUtil from '../../utils/TemperatureUtill';

describe("TemperatureUtil unit tests", () => {
    const { convert } = TemperatureUtil();

    test('Given Temperature 20C When convert Then 68F', () => {
      // GIVEN
      let input = new TemperatureVO(20, "CELSIUS");
      let expectedOutput = new TemperatureVO(68, "FAHRENHEIT");

      // WHEN
      let actualOutput = convert(input, "FAHRENHEIT");

      // THEN
      expect(actualOutput).toStrictEqual(expectedOutput);
    });

    test('Given Temperature 68F When convert Then 20C', () => {
        // GIVEN
        let input = new TemperatureVO(68, "FAHRENHEIT");
        let expectedOutput = new TemperatureVO(20, "CELSIUS");
  
        // WHEN
        let actualOutput = convert(input, "CELSIUS");
  
        // THEN
        expect(actualOutput).toStrictEqual(expectedOutput);
      });
});