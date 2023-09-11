import httpStatus from "http-status";

export default function errorHandler(error, req, res, next){
    if (error.type === "notFound") return res.status(httpStatus.NOT_FOUND).send(error.message)
    if (error.type === "incompleteData") return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    if (error.type === "conflict") return res.status(httpStatus.CONFLICT).send(error.message)
    if (error.type === "unprocessableEntity") return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
	return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("erro interno inesperado, tenta colocar a data de uma forma que fique genérico dia e mês tipo 10-10-2023, estou com problemas com o datastyle no bando do deploy, ele está como MM-DD-YYYY, não tive tempo de arrumar")
}