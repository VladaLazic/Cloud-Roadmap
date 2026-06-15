const KEY = 'cloud-roadmap-progress'

export function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}

export function isDayComplete(week, day) {
  return !!getProgress()[`${week}-${day}`]
}

export function setDayComplete(week, day, complete) {
  const progress = getProgress()
  const key = `${week}-${day}`
  if (complete) {
    progress[key] = true
  } else {
    delete progress[key]
  }
  localStorage.setItem(KEY, JSON.stringify(progress))
  return progress
}

export function toggleDay(week, day) {
  return setDayComplete(week, day, !isDayComplete(week, day))
}

export function countCompleted() {
  return Object.keys(getProgress()).length
}

export function getWeekProgress(weekData) {
  const completed = weekData.days.filter((d) => isDayComplete(weekData.week, d.day)).length
  return { completed, total: weekData.days.length }
}
