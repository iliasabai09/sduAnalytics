import * as teachers from '../../../public/db/teachers.json'

export class TeachersService {
	static getTeachers() {
		return teachers.teachers
	}

	static getTeachersFromIds(ids: number[]) {
		const cur = teachers.teachers
		return cur.filter(teacher => ids.includes(teacher.id))
	}
}
