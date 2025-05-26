document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/appointments');
    const appointments = await response.json();

    const table = document.getElementById('appointmentTable');
    const filterInput = document.getElementById('filter');

    const renderTable = (data) => {
        table.innerHTML = '';
        data.forEach((appt) => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${appt.patientName}</td>
        <td>${appt.doctorName}</td>
        <td>${appt.appointmentTime}</td>
        <td>${appt.phoneNumber}</td>
      `;
            table.appendChild(row);
        });
    };

    renderTable(appointments);

    filterInput.addEventListener('input', () => {
        const keyword = filterInput.value.toLowerCase();
        const filtered = appointments.filter(appt =>
            appt.patientName.toLowerCase().includes(keyword) ||
            appt.doctorName.toLowerCase().includes(keyword)
        );
        renderTable(filtered);
    });
});
