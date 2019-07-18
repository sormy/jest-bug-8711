import { testConsumer } from "../src/testConsumer"

jest.mock("test-lib")

// this test will die with: "TypeError: _react.default.createContext is not a function"
// because setupFilesAfterEnv is not executed on right moment of time

describe("testConsumer", () => {
  test("test", () => {
    const result = testConsumer()
    expect(result).toEqual("Message: Hello World!")
  })
})
