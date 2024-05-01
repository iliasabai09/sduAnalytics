import * as teachers from '../../../public/db/teachers.json'

export class TeachersService {
	static getTeachers() {
		return teachers.teachers
	}
}
