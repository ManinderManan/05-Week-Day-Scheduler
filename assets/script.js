$(document).ready(function() {

   const currentHour = dayjs().hour()

   $(".time-block").each(function() {
      const hourEl = $(this)

      const saveBtnEl = hourEl.children(".saveBtn")

      const textAreaEl = hourEl.children(".description")

      const textId = textAreaEl.attr("id")

      textAreaEl.val(localStorage.getItem(textId))

      saveBtnEl.on("click", function() {
         const textValue = textAreaEl.val()
         localStorage.setItem(textId, textValue)
      })

      const hourNum = parseInt(hourEl.attr("id").substr(5, 2), 10)

      if (currentHour > hourNum) {
         hourEl.removeClass("present")
         hourEl.removeClass("future")
         hourEl.addClass("past")
      }
      if (currentHour === hourNum) {
         hourEl.removeClass("past")
         hourEl.removeClass("future")
         hourEl.addClass("present")
      }

      if (currentHour < hourNum) {
         hourEl.removeClass("past")
         hourEl.removeClass("present")
         hourEl.addClass("future")
      }
   })

   const currentDate = dayjs().format('MM/DD/YYYY')

   const dateEl = $("#currentDay")

   dateEl.text(currentDate)
})