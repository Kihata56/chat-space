$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__message-list__view-room" data-message-id=${message.id}>
          <div class="main-chat__message-list__view-room__items-room">
            <div class="main-chat__message-list__view-room__items-room__three-items">
              <div class="main-chat__message-list__view-room__items-room__three-items__name">
                ${message.user_name}
              </div>
              <div class="main-chat__message-list__view-room__items-room__three-items__days">
                ${message.created_at}
              </div>
            </div>
            <div class="main-chat__message-list__view-room__items-room__message">
              <p class="main-chat__message-list__view-room__items-room__message__content">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
          </div>`
        return html;
      } else {
      let html =
      `<div class="main-chat__message-list__view-room" data-message-id=${message.id}>
        <div class="main-chat__message-list__view-room__items-room">
          <div class="main-chat__message-list__view-room__items-room__three-items">
            <div class="main-chat__message-list__view-room__items-room__three-items__name">
              ${message.user_name}
            </div>
            <div class="main-chat__message-list__view-room__items-room__three-items__days">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__message-list__view-room__items-room__message">
            <p class="main-chat__message-list__view-room__items-room__message__content">
              ${message.content}
            </p>
          </div>
        </div>`
        return html;
      };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__message-list').append(html);
      $('form')[0].reset();
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});      
      $('.main-chat__message-form__message-box__send').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.main-chat__message-form__message-box__send').prop("disabled", false);
    });  
  })
});
