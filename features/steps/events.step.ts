import {Given, Then} from '@cucumber/cucumber';
import {expect} from 'chai';

Given('user{int} creates an event{int} with title {string} on certificate{int} with proper errors', async function (
  userIndex, eventIndex, title, certificateIndex
) {
  const wallet = this.store.getUserWallet(userIndex);
  const certificateId = this.store.getToken(certificateIndex);

  try {
    const { arianeeEventId } = await wallet.methods.createArianeeEvent({
      certificateId,
      content: {
        title,
        $schema: 'https://cert.arianee.org/version1/ArianeeEvent-i18n.json'
      }
    });

    expect(false).to.be.true;
  } catch (err) {
    const isCertificateCreditError:boolean = err.find(d => d.code === 'credit.event') !== undefined;
    const isApproveStoreError:boolean = err.find(d => d.code === 'approve.store') !== undefined;
    const isCreditPoaError:boolean = err.find(d => d.code === 'credit.POA') !== undefined;

    expect(isApproveStoreError).to.be.false;
    expect(isCertificateCreditError).to.be.true;
    expect(isCreditPoaError).to.be.false;
  }
});

Given('user{int} creates an event{int} on certificate{int} as:', async function (
  userIndex, eventIndex, certificateIndex, eventContentSTR
) {
  const wallet = this.store.getUserWallet(userIndex);
  const certificateId = this.store.getToken(certificateIndex);

  const eventContent = JSON.parse(eventContentSTR);

  const { arianeeEventId } = await wallet.methods.createAndStoreArianeeEvent({
    certificateId,
    content: eventContent
  }, `http://localhost:3002/${process.env.NETWORK}/rpc`
  );

  this.store.storeEvent(eventIndex, arianeeEventId);
});

Given('user{int} createsAndStores an event{int} on certificate{int} as:', async function (
  userIndex, eventIndex, certificateIndex, eventContentSTR
) {
  const wallet = this.store.getUserWallet(userIndex);
  const certificateId = this.store.getToken(certificateIndex);
  const eventContent = JSON.parse(eventContentSTR);
  const { arianeeEventId } = await wallet.methods.createAndStoreArianeeEvent({
    certificateId,
    content: eventContent
  }, `http://localhost:3002/${process.env.NETWORK}/rpc`
  );
  this.store.storeEvent(eventIndex, arianeeEventId);
});

Given('user{int} createsAndStores an event{int} with title {string} on certificate{int}', async function (
  userIndex, eventIndex, title, certificateIndex
) {
  const wallet = this.store.getUserWallet(userIndex);
  const certificateId = this.store.getToken(certificateIndex);

  const { arianeeEventId } = await wallet.methods.createAndStoreArianeeEvent({
    certificateId,
    content: {
      title,
      $schema: 'https://cert.arianee.org/version1/ArianeeEvent-i18n.json'
    }
  }, `http://localhost:3002/${process.env.NETWORK}/rpc`
  );

  this.store.storeEvent(eventIndex, arianeeEventId);
});

Given('user{int} accepts event{int}', async function (
  userIndex, eventIndex
) {
  const wallet = this.store.getUserWallet(userIndex);
  const arianeeEventId = this.store.getEvent(eventIndex);

  await wallet.methods.acceptArianeeEvent(arianeeEventId);
});

Given('user{int} refuses event{int}', async function (
  userIndex, eventIndex
) {
  const wallet = this.store.getUserWallet(userIndex);
  const arianeeEventId = this.store.getEvent(eventIndex);

  await wallet.methods.refuseArianeeEvent(arianeeEventId);
});

Given('user{int} checks event{int} status is {string} on certificate{int}', async function (
  userIndex, eventIndex, status, certificateIndex
) {
  const wallet = this.store.getUserWallet(userIndex);
  const certificateId = this.store.getToken(certificateIndex);
  const arianeeEventId = this.store.getEvent(eventIndex);

  if (status === 'accepted') {
    const eventsLength:number = await wallet.contracts.eventContract.methods.eventsLength(certificateId).call() as any;

    let isIncluded = false;
    for (let index = 0; index < eventsLength; index++) {
      const event = await wallet.contracts.eventContract.methods
        .tokenEventsList(certificateId, index).call();

      if (event.toString() === arianeeEventId.toString()) {
        isIncluded = true;
        break;
      }
    }

    expect(isIncluded === true).to.be.true;
  } else if (status === 'refused') {
    try {
      await wallet.contracts.eventContract.methods.getEvent(arianeeEventId).call();
      expect(true).to.be.false;
    } catch (err) {
      expect(true).to.be.true;
    }
  } else if (status === 'pending') {
    const eventsLength:number = await wallet.contracts.eventContract.methods.pendingEventsLength(certificateId).call() as any;

    let isIncluded = false;
    for (let index = 0; index < eventsLength; index++) {
      const event = await wallet.contracts.eventContract.methods
        .pendingEvents(certificateId, index).call();

      if (event.toString() === arianeeEventId.toString()) {
        isIncluded = true;
        break;
      }
    };
    expect(isIncluded === true).to.be.true;
  } else {
    throw new Error('status is undefined or not known');
  }
});

Then('user{int} try to create 2 events with the same eventId on certficate{int}',
  async function (userIndex, certificateIndex) {
    const wallet = this.store.getUserWallet(userIndex);
    const certificateId = this.store.getToken(certificateIndex);

    const { arianeeEventId } = await wallet.methods.createArianeeEvent({
      certificateId,
      content: {
        title: 'title',
        $schema: 'https://cert.arianee.org/version1/ArianeeEvent-i18n.json'
      }
    });

    try {
      await wallet.methods.createArianeeEvent({
        certificateId,
        arianeeEventId,
        content: {
          title: 'title',
          $schema: 'https://cert.arianee.org/version1/ArianeeEvent-i18n.json'
        }
      });
      expect(true).equals(false);
    } catch {
      expect(true).equals(true);
    }
  });
