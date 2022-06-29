export const urlMock = {
    userMainData(id) {
        return `../../public/data/${id}_main_data.json`
    },
    userActivity(id) {
        return `../../public/data/${id}/user_activity.json`
    },
    userAverageSessions(id) {
        return `../../public/ata/${id}/user_average_sessions.json`
    },
    userPerformances(id) {
        return `../../public/data/${id}/user_performance.json`
    }
}
