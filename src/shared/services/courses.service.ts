import * as courses from '../../../public/db/courses.json'
import { TeachersService } from '@/shared/services/teachers.service'

export class CoursesService {
	static getCourses() {
		//@ts-ignore
		const cur = courses.default
		const coursesMap = []
		for (const key in cur) {
			coursesMap.push(cur[key])
		}
		return coursesMap
	}

	static getCoursesFromSemester(sem: string | number) {
		//@ts-ignore
		const cur = {...courses.default}
		const coursesMap = []
		for (const key in cur) {
			const copy = {...cur[key]}
			const teacher = [...copy.teachers]
			copy.teachers = TeachersService.getTeachersFromIds(teacher)
			if (Number(copy.semester) <= Number(sem)) coursesMap.push(copy)
		}
		return coursesMap
	}
}
