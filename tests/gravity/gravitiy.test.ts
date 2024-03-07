import {
  afterAll,
  afterEach,
  assert,
  beforeAll,
  beforeEach,
  clearStore,
  describe,
  test,
} from "matchstick-as";
import { store } from "@graphprotocol/graph-ts";
// generated/
import { Gravatar } from "../../generated/schema";
// src/
import { handleNewGravatar } from "../../src/gravity";
// utils/
import { createNewGravatarEvent, handleNewGravatars } from "./utils";

test("Can call mappings with custom events", () => {
  // create a test entity and save it in the store as initial state (optional)
  const gravatar = new Gravatar("gravatarId0");
  gravatar.save();

  // create mock events
  const newGravatarEvent = createNewGravatarEvent(
    12345,
    "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
    "cap",
    "pac"
  );
  const anotherGravatarEvent = createNewGravatarEvent(
    3546,
    "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
    "cap",
    "pac"
  );

  // call mapping functions passing the events we just created
  handleNewGravatars([newGravatarEvent, anotherGravatarEvent]);

  // assert the state of the store
  assert.fieldEquals("Gravatar", "gravatarId0", "id", "gravatarId0");
  assert.fieldEquals(
    "Gravatar",
    "12345",
    "owner",
    "0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7"
  );
  assert.fieldEquals("Gravatar", "3546", "displayName", "cap");

  // clear the store in order to start the next test off on a clean slate
  clearStore();
});

/* 
// beforeEach (afterEach) - runs a code before/after every test within its block scope. In this case it runs before/after every nested test in each describe block in this file
beforeEach(() => {
  clearStore();
});

// describe - defines a test group
describe("handleNewGravatar()", () => {
  // beforeAll - can be placed outside/inside the describe block. It simply runs beforeAll execution within its block scope
  beforeAll(() => {
    let gravatar = new Gravatar("0x0");
    gravatar.displayName = "Avatar Wan";
    gravatar.save();
  });
  // test - defines a test case. You can use test() inside of describe() blocks or independently
  test("should create a new Gravatar entity 𝍑", () => {});
});

// afterAll - can be placed outside/inside the describe block. It simply runs afterAll execution within its block scope
afterAll(() => {
  store.remove("Gravatar", "0x0");
});

describe("handleUpdatedGravatar", () => {
  beforeEach(() => {
    let gravatar = new Gravatar("0x0");
    gravatar.displayName = "Wan";
    gravatar.imageUrl = "";
    gravatar.save();
  });

  afterEach(() => {
    store.remove("Gravatar", "0x0");
  });

  test("Updates the displayName", () => {
    assert.fieldEquals("Gravatar", "0x0", "displayName", "Wan");

    // code that should update the displayName to Rava

    assert.fieldEquals("Gravatar", "0x0", "displayName", "Rava");
  });

  test("Updates the imageUrl", () => {
    assert.fieldEquals("Gravatar", "0x0", "imageUrl", "");

    // code that should change the imageUrl to https://www.gravatar.com/avatar/0x0

    assert.fieldEquals(
      "Gravatar",
      "0x0",
      "imageUrl",
      "https://www.gravatar.com/avatar/0x0"
    );
  });
});
*/
