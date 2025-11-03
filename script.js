// small interactive features: open mailto and generate .ics download
document.addEventListener('DOMContentLoaded', function(){
  const rsvpBtn = document.getElementById('rsvpBtn');
  const rsvpMail = document.getElementById('rsvpMail');
  const downloadIcs = document.getElementById('downloadIcs');

  if(rsvpBtn){
    rsvpBtn.addEventListener('click', function(e){
      // scroll to register section
      document.getElementById('register').scrollIntoView({behavior:'smooth', block:'start'});
      e.preventDefault();
    });
  }

  if(downloadIcs){
    downloadIcs.addEventListener('click', function(e){
      e.preventDefault();
      // ICS content for Nov 22, 2025 14:00 - 17:30 Europe/Lagos (UTC+1)
      const ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//University GCloud Watch Party//EN',
        'CALSCALE:GREGORIAN',
        'BEGIN:VEVENT',
        'DTSTAMP:20251103T000000Z',
        'DTSTART:20251122T130000Z',
        'DTEND:20251122T163000Z',
        'SUMMARY:Google Cloud Summit — Watch Party (Students)',
        'DESCRIPTION:Keynotes from the Summit and a hands-on Gemini CLI workshop. Snacks provided.',
        'LOCATION:University Campus — Main Lecture Hall',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\\r\\n');

      const blob = new Blob([ics], {type: 'text/calendar;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'gcloud-watchparty-2025-11-22.ics';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  }

});
