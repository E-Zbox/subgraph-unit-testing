import { newMockEvent } from "matchstick-as";
// generated/ `graph codegen`
import { NewGravatar } from "../../generated/Gravity/Gravity";
// src/ event-handlers
import { handleNewGravatar } from "../../src/gravity";
import { Address, ethereum } from "@graphprotocol/graph-ts";

export function handleNewGravatars(events: NewGravatar[]): void {
  events.forEach((event) => {
    handleNewGravatar(event);
  });
}

export function createNewGravatarEvent(
  id: number,
  ownerAddress: string,
  displayName: string,
  imageUrl: string
): NewGravatar {
  const {
    address,
    logIndex,
    transactionLogIndex,
    logType,
    block,
    transaction,
    parameters,
    receipt,
  } = newMockEvent();
  const newGravatarEvent = new NewGravatar(
    address,
    logIndex,
    transactionLogIndex,
    logType,
    block,
    transaction,
    parameters,
    receipt
  );

  newGravatarEvent.parameters = new Array();

  const idParam = new ethereum.EventParam("id", ethereum.Value.fromI32(id));
  const addressParam = new ethereum.EventParam(
    "owner",
    ethereum.Value.fromAddress(Address.fromString(ownerAddress))
  );
  const displayNameParam = new ethereum.EventParam(
    "displayName",
    ethereum.Value.fromString(displayName)
  );
  const imageUrlParam = new ethereum.EventParam(
    "imageUrl",
    ethereum.Value.fromString(imageUrl)
  );

  newGravatarEvent.parameters.push(idParam);
  newGravatarEvent.parameters.push(addressParam);
  newGravatarEvent.parameters.push(displayNameParam);
  newGravatarEvent.parameters.push(imageUrlParam);

  return newGravatarEvent;
}
