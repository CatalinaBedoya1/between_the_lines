// mailchimp.js

const mailchimp = require('@mailchimp/mailchimp_marketing');

// Initialize the Mailchimp API client with your API key
mailchimp.setConfig({
  apiKey: 'ada9ddc4cf30feb792fab4dea8e7ca27-us22',
  server: 'us22', // e.g., 'us1' if your API key starts with 'us1-'
});

// Subscribe a user to your mailing list
async function subscribeUser(email) {
  try {
    const response = await mailchimp.lists.addListMember('YOUR_LIST_ID', {
      email_address: email,
      status: 'subscribed',
    });
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  subscribeUser,
};
