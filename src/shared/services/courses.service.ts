import * as courses from '../../../public/db/courses.json'
import { TeachersService } from '@/shared/services/teachers.service'
import { UserService } from '@/shared/services/user.service'

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
		const cur = {...courses.default};
		const coursesMap = [];
		for (const key in cur) {
			const copy = {...cur[key]};
			const teacher = [...copy.teachers];
			copy.teachers = TeachersService.getTeachersFromIds(teacher);
			if (Number(copy.semester) <= Number(sem)) coursesMap.push(copy);
		}
		return coursesMap;
	}

	static getGroupedCourses() {
		const cur = {...courses.default};
		const userCourses = UserService.getUser().courses;
		const coursesMap = [];
		for (const key in cur) {
			coursesMap.push(cur[key]);
		}
		return [...userCourses, ...coursesMap.filter(course => !userCourses.find(uCourse => uCourse.title === course.title))];
		// console.log(coursesMap);
	}
}
