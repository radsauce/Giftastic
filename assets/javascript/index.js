var topics = ['Impreza', 'WRX', 'Subaru', 'WRC', 'drift']
topics.forEach(topic => {
  $('#topicDiv').append(`
    <button class="btn topicBtn" data-name="${topic}"> ${topic}</button>
  `);
});

//user input button add
$('#userAdd').on('click', function() {
  event.preventDefault();
  var topic = $('#userInput').val().trim();
  if (topic === '') {
  } else {$('#topicDiv').append(`<button class="btn topicBtn" data-name="${topic}">${topic}</button>`);
} 
$('#userInput').val('');
})

//giphy API pull
$(document).on('click', '.topicBtn', function () {
  var URL = "https://api.giphy.com/v1/gifs/search"
    URL += '?' + $.param({
    'q': `${$(this).attr('data-name')}`,
    'api_key': "OY5DQjaCcCVAwsGc8IUzN5ZRcQrxwZim",
    'limit': 10
  });

  $.get(URL)
    .then(function (r) {
      r.data.forEach(topic => {
        $('#imagesDiv').append(`
        <div class="col-md-6 col-lg-4" id="imgItem">
        <a href="${topic.images.original.url}" target="_blank"><img class="topic-image" src="${topic.images.original_still.url}" alt="Loading Error!"></a>
        <h5 class="topic-rating">Rated: ${topic.rating}</h5>
        </div>
        `)
        console.log(r)
      });
    })
    .catch(function (e) { console.log(e)})
})


