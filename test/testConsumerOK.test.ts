import { testConsumer } from "../src/testConsumer"

// jest.mock("test-lib")

describe("testConsumer", () => {
  test("test", () => {
    const result = testConsumer()
    expect(result).toEqual("Message: Hello World!")
  })
})
