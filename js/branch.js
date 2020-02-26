var linkData = {
    campaign: 'content 123',
    channel: 'website',
    feature: 'dashboard',
    stage: 'new user',
    tags: [ 'tag1', 'tag2', 'tag3' ],
    alias: '',
    data: {
      'custom_bool': true,
      'custom_int': Date.now(),
      'custom_string': 'hello',
      '$og_title': 'Title',
      '$og_description': 'Description',
      '$og_image_url':'http://lorempixel.com/400/400'
    }
  };
  
//   branch.link(linkData, function(err, link) {
//     // bind elements
//     document.getElementById('button').onclick = function() {
//       window.open(link || err);
//     };
//     document.getElementById('anchor').href = link || err;
//   });

var phoneNumber = '+17322788499'

var linkOptions = {
  make_new_link: false // don't create a new deep link if one already exists (e.g. _branch_match_id is in the address bar)
};

branch.sendSMS(phoneNumber, linkData, linkOptions, function(err, data) {
  console.log(err);
});